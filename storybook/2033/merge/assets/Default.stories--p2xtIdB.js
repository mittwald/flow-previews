import{j as r}from"./iframe-BEnK-FWT.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Du8jrWof.js";import{L as m}from"./Link-UbWnZjFN.js";import{H as s}from"./HeaderNavigation-Cc7-Lx5K.js";import{B as o}from"./Button-Du_IXIsC.js";import{T as p}from"./Text-DfapAs8s.js";import{I as B}from"./Image-DAkzKfv5.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-3l-Ku5_H.js";import{C as y,M as c}from"./MenuItem-Z2vzlxG1.js";import{C as A}from"./ContextMenuTrigger-BgOygzFB.js";import"./ContextMenuSection-DnHVIOni.js";import{a as D,M as E}from"./Modal-BdH3kQEu.js";import{H as G}from"./Heading-CM2cHxtn.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./context-B1E8CUSR.js";import"./utils-HuzRHECM.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BT-0Cvdy.js";import"./useFocus-DNN1vAkK.js";import"./useFocusRing-Bx80huIr.js";import"./useFocusable-B7vzQveK.js";import"./dynamic-DjJiwxiO.js";import"./LoadingSpinner-BRr-XCzk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDOmUSXw.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./useLabel-DH4gBFQn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Text-pg5s_iHF.js";import"./AlertIcon-BkAMeecS.js";import"./Action-Dje9lihP.js";import"./context-BV6G6ZUO.js";import"./useStatic-B4Kccozc.js";import"./getActionGroupSlot-W7A_YSpc.js";import"./Popover-DZl8NY7u.js";import"./useOverlayController-BE8aQLWH.js";import"./OverlayContextProvider-j0JmEzC4.js";import"./Dialog-CDa_BhSJ.js";import"./RSPContexts-BUhaye_C.js";import"./OverlayArrow-CtuVQXhz.js";import"./useControlledState-M8qHyrFf.js";import"./Collection-BOkVQ-64.js";import"./CollectionBuilder-BHVjkzb6.js";import"./context-C5-mMKGT.js";import"./Separator-Cp8WNBkf.js";import"./SelectionManager-C9W_dvum.js";import"./useEvent-CuOy2IQf.js";import"./useCollator-B8pGQ6dk.js";import"./FocusScope-CIlgtdEP.js";import"./VisuallyHidden-uM_MQnLf.js";import"./ClearPropsContextView-F9DsjkX8.js";import"./Switch-CHz7A4bY.js";import"./Label-jTnCUURY.js";import"./useToggleState-BQs4eiAr.js";import"./useFormReset-UhEuFSE1.js";import"./OverlayTrigger-E-7GhxTF.js";import"./ControlledNotification-CbbsaCZP.js";import"./DialogTriggerView-D8S4ALV9.js";import"./Overlay-D32JlaYy.js";import"./ButtonView-i9f7Zq-L.js";import"./Heading-BLcTsrbo.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
