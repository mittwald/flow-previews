import{j as r}from"./iframe-giJ3PN41.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-Dj_wwKGm.js";import{L as m}from"./Link-B3ArSmG7.js";import{H as s}from"./HeaderNavigation-BHkq2bUb.js";import{B as o}from"./Button-t3gsP1h6.js";import{T as p}from"./Text-unBq3m4E.js";import{I as C}from"./Image-CC5Y2b_D.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CSGw_5ac.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BPAZwY6q.js";import"./ContextMenuSection-BxP3d4es.js";import{a as D,M as G}from"./Modal-C83F5vfl.js";import{H as E}from"./Heading-GF-rSarA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./context-B5VaUXEx.js";import"./utils-CXDqZ2sl.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D1wL7cKS.js";import"./useFocus-CuIPz-Kl.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-kOBWqA9j.js";import"./Button-DJpSVAFI.js";import"./ProgressBar-B5g3Upep.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./useLabel-DTs_WTOS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DkEs9M37.js";import"./EmulatedBoldText-D-WMJ6En.js";import"./Text-CPIeRDsX.js";import"./AlertIcon-Bu46hoHj.js";import"./Action-oFlNv8p8.js";import"./context-CtVI5d4l.js";import"./useStatic-BgGRa1ft.js";import"./getActionGroupSlot-DO7dNHL6.js";import"./Popover-wrThc68r.js";import"./DialogTriggerView-D_msadZI.js";import"./Dialog-BJZav00b.js";import"./RSPContexts-D9-_jwd4.js";import"./OverlayArrow-BGGM7Kja.js";import"./useControlledState-BdipClPW.js";import"./Collection-DKY2nhBh.js";import"./CollectionBuilder-DGOIxE5b.js";import"./Separator-pxt8W_GD.js";import"./Group-CrHdP7HD.js";import"./SearchField-TlY83ID8.js";import"./FieldError-nVLUoiBd.js";import"./Form-DPXxe_7V.js";import"./useTextField-_WbwmA1r.js";import"./useFormReset-ChCBJkpa.js";import"./TextField-CJSQz5rH.js";import"./useEvent-BWSnRzjc.js";import"./SelectionManager-xGqpQwPR.js";import"./useCollator-n7eXimmn.js";import"./FocusScope-D6b4m46d.js";import"./VisuallyHidden-DL0JmpvH.js";import"./Switch-Cib0wmKS.js";import"./Label-DSQuszpE.js";import"./useToggleState-uqJ4V_wE.js";import"./Overlay-BuUVtGWy.js";import"./ButtonView-CMTHfTqq.js";import"./Heading-CZgTbgZP.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
