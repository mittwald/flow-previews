import{j as r}from"./iframe-D5sJq8Pp.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DOhF27zV.js";import{L as m}from"./Link-DUuEEbYf.js";import{H as s}from"./HeaderNavigation-B4pz0Bya.js";import{B as o}from"./Button-6TUR0Zrk.js";import{T as p}from"./Text-DSs6zbpd.js";import{I as C}from"./Image-oZq_RXcC.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DXFid7sl.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Z11Z9YFr.js";import"./ContextMenuSection-B7Ct79il.js";import{a as D,M as G}from"./Modal-LDE1lGnB.js";import{H as E}from"./Heading-D3Bf2r0X.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./context-C2iapZe2.js";import"./utils-9AX_qn18.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DXXMSHM3.js";import"./useFocus-RhB9nR94.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./Button-B2KXtDin.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./useLabel-Ch8Q4uqY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";import"./Text-DkuK7F_5.js";import"./AlertIcon-4CF5WewO.js";import"./Action-DMCbC-Mq.js";import"./context-Bqz1H1Fh.js";import"./useStatic-C2JikVB-.js";import"./getActionGroupSlot-DeknL7IW.js";import"./Popover-BrRw5WAn.js";import"./DialogTriggerView-BkTJ82k3.js";import"./Dialog-D26-Wb54.js";import"./RSPContexts-DjLkZjo9.js";import"./OverlayArrow-DbUVmUBM.js";import"./useControlledState-BiqnvFAK.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./Group-DaTscDKv.js";import"./SearchField-D8zXD-s8.js";import"./FieldError-DPBRE9in.js";import"./Form-B6p3srko.js";import"./useTextField-BQF8DS2o.js";import"./useFormReset-BYD-PEh4.js";import"./TextField-Ce9H6aw_.js";import"./useEvent-Nf0LSw3x.js";import"./SelectionManager-B8zwja7I.js";import"./useCollator-i6ItQplZ.js";import"./FocusScope-Rm6rMrw2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./Switch-BIjHTqBr.js";import"./Label-C9pkE3_l.js";import"./useToggleState-CsyvliJk.js";import"./Overlay-CfarlGoH.js";import"./Header-CYdheNAb.js";import"./ButtonView-NwszBnAY.js";import"./Heading-Clo5dAHJ.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
