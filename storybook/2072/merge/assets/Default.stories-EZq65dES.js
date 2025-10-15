import{j as r}from"./iframe-tskdVQ8N.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Bd2S-Yd8.js";import{L as m}from"./Link-iA3tKyOY.js";import{H as s}from"./HeaderNavigation-eofPBiYA.js";import{B as o}from"./Button-Dsg_4rdI.js";import{T as p}from"./Text-jVUpGvvP.js";import{I as B}from"./Image-CEdWvHnp.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CNKVvxDI.js";import{C as y,M as c}from"./MenuItem-BqnDXFMV.js";import{C as A}from"./ContextMenuTrigger-CMBwvbQ4.js";import"./ContextMenuSection-DqvIY19i.js";import{a as D,M as E}from"./Modal-4SYJ-VXQ.js";import{H as G}from"./Heading-DLxD6IRh.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./utils-B12eWPaZ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./dynamic-BrDu037J.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C459Qnce.js";import"./EmulatedBoldText-BMIw02bL.js";import"./Text-DKYFQica.js";import"./AlertIcon-DhyOUWMq.js";import"./Action-CeCtXdjv.js";import"./context-CVZR0KsW.js";import"./useStatic-1YPHy18H.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./Popover-D2XSaC_F.js";import"./useOverlayController-B3CyRh3q.js";import"./OverlayContextProvider-DD0eGq15.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";import"./ClearPropsContextView-CYMEx9M6.js";import"./Switch--dTFLP8E.js";import"./useMakeFocusable-DhpPn-fN.js";import"./useToggleState-BiwQBtbj.js";import"./useFormReset-D7H6HyHT.js";import"./OverlayTrigger-CPNea7uG.js";import"./ControlledNotification-CR3joEtN.js";import"./DialogTriggerView-BSTysCeK.js";import"./Overlay-ksqSjJOA.js";import"./ButtonView-cJUz9uwS.js";import"./Heading-DLcHG4v5.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
