import{j as r}from"./iframe-DhBjVFTT.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BnanZbEc.js";import{L as m}from"./Link-BeeoFTbr.js";import{H as s}from"./HeaderNavigation-BYCSxhVJ.js";import{B as o}from"./Button-Dt7yciC3.js";import{T as p}from"./Text-DF-6yo40.js";import{I as C}from"./Image-B7vins_o.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DnF0Zp2b.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BrXa4Nvt.js";import"./ContextMenuSection-CT3iYxF3.js";import{a as D,M as E}from"./Modal-B9pGe86C.js";import{H as G}from"./Heading-DqOHm_4A.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./context-BcZ3stI5.js";import"./utils-BiTM62RC.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-IeWuLCB9.js";import"./useFocus-Boz126Wy.js";import"./useFocusRing-CZOlFmxO.js";import"./useFocusable-t-PCv4_E.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-HTsZz-Eh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClnqUudF.js";import"./ProgressBar-wpu_Jmey.js";import"./Label-9p36wJlw.js";import"./Hidden-CPEF8tx-.js";import"./useLabel-Cy7W7M25.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C93HlYrv.js";import"./EmulatedBoldText-BWS0giPu.js";import"./Text-BCOK263g.js";import"./AlertIcon-BGgNY89X.js";import"./Action-D5bbeFf7.js";import"./context-DD9eHGwL.js";import"./useStatic-b8Yzhzvr.js";import"./getActionGroupSlot-C52LfH-w.js";import"./Popover-ChkY5JIe.js";import"./DialogTriggerView-CvGHXAMK.js";import"./Dialog-BVFVztxJ.js";import"./RSPContexts-CwPCOUNA.js";import"./OverlayArrow-CEwR5798.js";import"./useControlledState-Cf0EFMq_.js";import"./Collection-BOa2gfjn.js";import"./CollectionBuilder-C5ynp6as.js";import"./Separator-LVnLAfMb.js";import"./Group-DbR3J14H.js";import"./SearchField-o8QMGYZs.js";import"./FieldError-NbMb9-3J.js";import"./Form-CStdbKj5.js";import"./useTextField-CmDnLbvp.js";import"./useFormReset-CLUGxJas.js";import"./TextField-BjhwsOaA.js";import"./useEvent-CK4Bm0IT.js";import"./SelectionManager-TQlp0lcm.js";import"./useCollator-Ds09yMoF.js";import"./FocusScope-Cxsex6N2.js";import"./VisuallyHidden-BaY3Aahk.js";import"./Switch-BXriQjcU.js";import"./Label-CYVPNsy_.js";import"./useToggleState-CMHEYQdw.js";import"./Overlay-Dfc_y5Py.js";import"./ButtonView-Bgj31At_.js";import"./Heading-Dv-6vxEo.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
