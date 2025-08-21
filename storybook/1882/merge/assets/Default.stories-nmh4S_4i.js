import{j as r}from"./iframe-B5f77The.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-ljKjKfGj.js";import{L as m}from"./Link-BqoYVK93.js";import{H as s}from"./HeaderNavigation-DltqhlSj.js";import{B as o}from"./Button-C6w7hggk.js";import{T as p}from"./Text-C70_tpAy.js";import{I as C}from"./Image-BJKAhFWX.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CMyn-LnC.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DxN5UtmD.js";import"./ContextMenuSection-wOoe79SY.js";import{a as D,M as E}from"./Modal-ByOh9sZA.js";import{H as G}from"./Heading-CY5HzgY3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./context-CDDYAalq.js";import"./utils-DeVL3yHt.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C1oGQ4tq.js";import"./useFocus-CpnAUhj6.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocusable-DVnwojtz.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CEnOuMOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ8WzA2D.js";import"./ProgressBar-roFwkZNY.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./useLabel-BZo659VM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";import"./Text-CRBsFpfB.js";import"./AlertIcon-Dsm3jMIM.js";import"./Action-DGsiT_W5.js";import"./context-CKo78_m4.js";import"./useStatic-L57Eul26.js";import"./getActionGroupSlot-BG28dPQB.js";import"./Popover-U6TIjOHH.js";import"./DialogTriggerView-CpbUus_v.js";import"./Dialog-BrLEju1s.js";import"./RSPContexts-B32A1VhO.js";import"./OverlayArrow-DxI9FzZ3.js";import"./useControlledState-BsCYAcFS.js";import"./Collection-Dq30mKZW.js";import"./CollectionBuilder-IT3s11YO.js";import"./Separator-CP2Hv3YB.js";import"./Group-cw_ccGJA.js";import"./SearchField-C4CWzvZC.js";import"./FieldError-CmSoGLTN.js";import"./Form-COFPxk6e.js";import"./useTextField-DOFOnMON.js";import"./useFormReset-CoVNXXZK.js";import"./TextField-DLnVqMvq.js";import"./useEvent-Bi5phJIq.js";import"./SelectionManager-CT47WU_1.js";import"./useCollator-CMx4eqOS.js";import"./FocusScope-DJcQajcM.js";import"./VisuallyHidden-BRRdMKGS.js";import"./Switch-DuGv1LRj.js";import"./Label-JDxcagIb.js";import"./useToggleState-DMnqxhjK.js";import"./Overlay-Bmxq8yrf.js";import"./ButtonView-BF425EBo.js";import"./Heading-CZmRCKf6.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
