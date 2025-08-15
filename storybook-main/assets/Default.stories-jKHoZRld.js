import{j as r}from"./iframe-CbwCPhjt.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-B6sLHyS3.js";import{L as m}from"./Link-Bc207xUX.js";import{H as s}from"./HeaderNavigation-RD0anYDB.js";import{B as o}from"./Button-nOGOhIJH.js";import{T as p}from"./Text-Ci_Uq_zV.js";import{I as C}from"./Image-Dnh43guZ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DPlc9Jb9.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CR4Zk6hd.js";import"./ContextMenuSection-AwsY5DNE.js";import{a as D,M as G}from"./Modal-CfQccSq0.js";import{H as E}from"./Heading-B64E3Y9s.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./context-DGTw6Ntc.js";import"./utils-DoFRGSuI.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B0jvTCtV.js";import"./useFocus-BeWrqrnh.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./Button-DQX_QvYf.js";import"./ProgressBar-Boef7pj0.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./useLabel-BZwWLEEp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";import"./Text-Bo_2a3q0.js";import"./AlertIcon-DQrdx1ul.js";import"./Action-C2KK5_kv.js";import"./context-zAWxkEGj.js";import"./useStatic-CNtjMAIH.js";import"./getActionGroupSlot-B5o4vquU.js";import"./Popover-BGNe2BOX.js";import"./DialogTriggerView-UbA78170.js";import"./Dialog-BLGTqvvx.js";import"./RSPContexts-CJnpvChB.js";import"./OverlayArrow-CBC8qT36.js";import"./useControlledState-vYcp2K1J.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./Group-DlZG06gX.js";import"./SearchField-WLounB_6.js";import"./FieldError-WwADG8x9.js";import"./Form-8EM0qQv2.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./TextField-5B8lnaMV.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./useCollator-CAu6FifQ.js";import"./FocusScope-CmGH9Vi6.js";import"./VisuallyHidden-DvTk0uSk.js";import"./Switch-BxBWgpRQ.js";import"./Label-LAkLliwq.js";import"./useToggleState-DcYYdjLU.js";import"./Overlay-BeXc0FjD.js";import"./ButtonView-COxzVi6f.js";import"./Heading-B1iybfVc.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
