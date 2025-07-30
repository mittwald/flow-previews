import{j as r}from"./iframe-Cs4u3jai.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-0BVBVXS4.js";import{L as m}from"./Link-ulpkcP8K.js";import{H as s}from"./HeaderNavigation-BSDQWrHO.js";import{B as o}from"./Button-Djxd_lPT.js";import{T as p}from"./Text-BBeTGXmh.js";import{I as C}from"./Image-8CkwZ63P.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BDVGQcYV.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DKFdXVt4.js";import"./ContextMenuSection-BFLvvtcx.js";import{a as D,M as G}from"./Modal-dDUCId0N.js";import{H as E}from"./Heading-Qz_GDDrV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./context-BvTQ7OVQ.js";import"./utils-vclj1Qm2.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BSD3tvTg.js";import"./useFocus-ClAUtHT6.js";import"./useFocusRing-BLMln0L2.js";import"./useFocusable-BN_CcrEu.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-C_G5gUEJ.js";import"./Button-x10lnAMQ.js";import"./ProgressBar-BneW9jxU.js";import"./Label-S4RmJPV5.js";import"./Hidden-CdwQ6yqP.js";import"./useLabel-BkGcoVJa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BbmE0SWg.js";import"./EmulatedBoldText-Wf0lwtn6.js";import"./Text-B7UIaBOw.js";import"./AlertIcon-C8AYv5dm.js";import"./Action-XTvpAmRi.js";import"./context-BVRdILhz.js";import"./useStatic-qxHK3Mia.js";import"./getActionGroupSlot-Kd7a9PPP.js";import"./Popover-CdGjSG1y.js";import"./DialogTriggerView-y3QEF81s.js";import"./Dialog-C6Y-YQl5.js";import"./RSPContexts-BOo-h-N-.js";import"./OverlayArrow-BnL8IPkJ.js";import"./useControlledState-D-JQKTrH.js";import"./Collection-Bxbbk1lS.js";import"./CollectionBuilder-DJiQAvza.js";import"./Separator-CA1KhONo.js";import"./Group-Uo6LargV.js";import"./SearchField-AfdpK6Ve.js";import"./FieldError-3wBrWCfg.js";import"./Form-D6x5jYca.js";import"./useTextField-CQf7PcN9.js";import"./useFormReset-u7ab4fFg.js";import"./TextField-Dg5MZqjY.js";import"./useEvent-Cx7qitQN.js";import"./SelectionManager-DjDhbl_H.js";import"./useCollator-BvHyoRqD.js";import"./FocusScope-FJ_dmtXb.js";import"./VisuallyHidden-BT36-Qvg.js";import"./Switch-iMvVKvC-.js";import"./Label-B0Y8PcLC.js";import"./useToggleState-BK3hHPRQ.js";import"./Overlay-BJY4v_1C.js";import"./Header-Dl0gaDQZ.js";import"./ButtonView-B5GWTC7G.js";import"./Heading-Bm4Z6AbO.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
