/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unicauca.activate.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author 57322
 */
@Entity
@Table(name = "event")
public class Event {

    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String titulo = "";

    @Column(length = 50)
    private String descripcion = "";

    @Column(length = 50)
    private String ubicacion = "";

    @Column(length = 50)
    private String fecha_inicio = "";

    @Column(length = 50)
    private String fecha_final = "";
    
    private String imagen;
    //Relación 1:N con la entidad category.
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    //Relacion N:1
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "event") 
    private List<Comment> comments;

    @OneToMany(mappedBy = "event")
    Set<EventUser> assistences;

    @ManyToOne
    @JoinColumn(name = "CIU_id", nullable = false)
    private City city;

    public void agregarComentarios(Comment comment) {
        if (this.comments == null) {
            this.comments = new ArrayList<>();
            this.comments.add(comment);
            comment.setEvent(this);
        } else {
            this.comments.add(comment);
            comment.setEvent(this);
        }
    }

    //Getters and Setters
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    
    
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public Set<EventUser> getAssistences() {
        return assistences;
    }

    public void setAssistences(Set<EventUser> assistences) {
        this.assistences = assistences;
    }


    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(String fecha_final) {
        this.fecha_final = fecha_final;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}