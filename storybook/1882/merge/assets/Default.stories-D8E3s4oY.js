import{j as r}from"./iframe-CqOqoVaP.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-Bl-oEACJ.js";import{L as m}from"./Link-CMyIQwoS.js";import{H as s}from"./HeaderNavigation-HSm2fP6L.js";import{B as o}from"./Button-CLlHTQEG.js";import{T as p}from"./Text-B3-X_MJa.js";import{I as C}from"./Image-CT4pXy-C.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BTOgluYo.js";import{a as y,C as A,M as c}from"./ContextMenuContent-3Kww7366.js";import"./ContextMenuSection-uq9F03so.js";import{a as D,M as E}from"./Modal-CNxgzEkj.js";import{H as G}from"./Heading-CO3GEgfZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./context-V257UCTc.js";import"./utils-CLjii6jw.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-bNRByjMC.js";import"./useFocus-B9OFNFcs.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocusable-BW0s8v46.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-ABbum_Xg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C385LXs-.js";import"./ProgressBar-C7nzlf9n.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./useLabel-BbxdwBsw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./Text-cqx9MXzt.js";import"./AlertIcon-Czl606C7.js";import"./Action-fJ1CcCf_.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./Popover-yINnB5RN.js";import"./DialogTriggerView-DwJ6gTTr.js";import"./Dialog-C3VX0NXb.js";import"./RSPContexts-D4Iw314Z.js";import"./OverlayArrow-Demj6cv0.js";import"./useControlledState-BdCCPWsc.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./Group-Cl8UGCCk.js";import"./SearchField-AywMrJlM.js";import"./FieldError-Db8jl934.js";import"./Form-DfmQoqyq.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./TextField-DbkzlANK.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./useCollator-C8Ow2U1A.js";import"./FocusScope-C_8IMyFN.js";import"./VisuallyHidden-BthzWCih.js";import"./Switch-DksrkWLf.js";import"./Label-CXX9Ul6V.js";import"./useToggleState-TPr3ZkoU.js";import"./Overlay-DOnylHm7.js";import"./ButtonView-CW59tH2E.js";import"./Heading-DhNp_5ef.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
