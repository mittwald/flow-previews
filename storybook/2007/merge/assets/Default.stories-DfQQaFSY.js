import{j as r}from"./iframe-upPjViUi.js";import{y as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-CwNATdER.js";import{L as m}from"./Link-DQmq8o69.js";import{H as s}from"./HeaderNavigation-MpRJihYW.js";import{B as o}from"./Button-BdUtk4-2.js";import{T as p}from"./Text-DrOfxU9W.js";import{I as C}from"./Image-CDUUDJWI.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BLNGJFMl.js";import{b as y,C as A,M as c}from"./ContextMenuSection-3Je0aaRW.js";import{a as D,M as E}from"./Modal-Efa-ZTs4.js";import{H as G}from"./Heading-BedWGYuH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./context-DUCBVekV.js";import"./utils-D7Ud1rY1.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-nNimJg5a.js";import"./useFocus-CKR8Kfvk.js";import"./useFocusRing-DBg1NGxh.js";import"./useFocusable-D-QSeIiW.js";import"./dynamic-Cvppd2SX.js";import"./LoadingSpinner-CzeOX1VK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CWtnBlrz.js";import"./ProgressBar-B2varhWC.js";import"./Label-VDo2pjQH.js";import"./Hidden-DUPaGITp.js";import"./useLabel-Bv0sV64n.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BQR41_Xo.js";import"./EmulatedBoldText-gAgggVs5.js";import"./Text-CPJx-aex.js";import"./AlertIcon-CYvOwVV-.js";import"./Action-Cb9jSIVt.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./getActionGroupSlot-Dx3eCL3t.js";import"./Popover-CM6Xbo5y.js";import"./DialogTriggerView-CYID30AX.js";import"./RSPContexts-CDfzDcm_.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./useControlledState-DJQ8YErb.js";import"./FocusScope-cBvdiCGC.js";import"./useCollator-C5XQM9l2.js";import"./VisuallyHidden-svNoe17i.js";import"./Collection-C7hZcg-r.js";import"./CollectionBuilder-CvJppZRn.js";import"./Separator-NH6jHWUN.js";import"./Group-ClmTbc4u.js";import"./SearchField-DoTA-SfC.js";import"./FieldError-Dxc2xglq.js";import"./Form-CCPP_JFl.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./TextField-DM_RTlmg.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";import"./Switch-BhwnwwjS.js";import"./Label-RDx-2swG.js";import"./useToggleState-BeIkbzV7.js";import"./Overlay-D94jpJ6J.js";import"./ButtonView-CeF7-VfM.js";import"./Heading-Cw_qLrj_.js";const Ur={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Vr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Vr as __namedExportsOrder,Ur as default};
