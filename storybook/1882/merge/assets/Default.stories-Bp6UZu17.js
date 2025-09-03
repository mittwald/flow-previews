import{j as r}from"./iframe-BPnb-8PC.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-j0MoznR6.js";import{L as m}from"./Link-Dz5NnzvA.js";import{H as s}from"./HeaderNavigation-D6ghxI8A.js";import{B as o}from"./Button-chDOhf6m.js";import{T as p}from"./Text-Ba-uZw6F.js";import{I as C}from"./Image-C_NTgiNp.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CG8b4WBC.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CkNlJAKS.js";import"./ContextMenuSection-D-7n8W_E.js";import{a as D,M as E}from"./Modal-EKSvcTaO.js";import{H as G}from"./Heading-DZGjjTVb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./context-Cvzu1MDH.js";import"./utils-BNZdeyCH.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DbV6qfru.js";import"./useFocus-CQt3VlDx.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocusable-DW9GZi2B.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BUt2pcHy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DWahSmPc.js";import"./ProgressBar-C4vCg6TA.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./useLabel-Mae_nSQP.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-tQ-t1xxT.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./Text-KWqvWgwT.js";import"./AlertIcon-JrYwTJx8.js";import"./Action-Bmubu_cL.js";import"./context-DmMltsbs.js";import"./useStatic-2pKXc1Kg.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./Popover-CEK-D9_R.js";import"./DialogTriggerView-B5ULWNQB.js";import"./Dialog-ChpM20JY.js";import"./RSPContexts-2Y1bGEeq.js";import"./OverlayArrow-DddHfoXR.js";import"./useControlledState-BZWp4i98.js";import"./Collection-FyZk2N5J.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Separator-ACF8I6Sm.js";import"./Group-BfJL9-FJ.js";import"./SearchField-DgHP0CGL.js";import"./FieldError-Dg8qbhsB.js";import"./Form-CLKe_oCF.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./TextField-DLL4ZGuM.js";import"./useEvent-C_P8io5N.js";import"./SelectionManager-BBZQaH8A.js";import"./useCollator-bsozdqlF.js";import"./FocusScope-CnAVXuaX.js";import"./VisuallyHidden-BEucGg6b.js";import"./Switch-DDbZisdd.js";import"./Label-bLTq-ewh.js";import"./useToggleState-BaDXX3KU.js";import"./Overlay-Dh1VzNuu.js";import"./ButtonView-B7_vWq61.js";import"./Heading-BpH7y_My.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
