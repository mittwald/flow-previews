import{j as r}from"./iframe-DoW4S5y5.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-1bSGr7bL.js";import{L as m}from"./Link-CoE1Lnwt.js";import{H as s}from"./HeaderNavigation-CQFyf4_q.js";import{B as o}from"./Button-CJ9GVWSA.js";import{T as p}from"./Text-BWWLLA_C.js";import{I as C}from"./Image-DIjzxP-S.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DtCbY4xt.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CwETirAO.js";import"./ContextMenuSection-COBm8Dng.js";import{a as D,M as E}from"./Modal-D3S4wuqL.js";import{H as G}from"./Heading-Dt1Rqblk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./context-DLINqX3o.js";import"./utils-BERKyAtu.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BTQEKaY-.js";import"./useFocus-CTercWxn.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocusable-Caaze2NE.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-C4oFajCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DnWzyqBm.js";import"./ProgressBar-Cw6ko2xq.js";import"./Label-BiPavfPM.js";import"./Hidden-DdNFa5_a.js";import"./useLabel-xAN8HAzj.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-1Svz-vih.js";import"./EmulatedBoldText-88Z3nw3V.js";import"./Text-C09El9xQ.js";import"./AlertIcon-BMWYXnkh.js";import"./Action-CvPFBQ3X.js";import"./context-Ex8JCHDm.js";import"./useStatic-CyJ13LoA.js";import"./getActionGroupSlot-C-O0F5Jp.js";import"./Popover-DjXoYR6o.js";import"./DialogTriggerView-Cc9fs5Ki.js";import"./Dialog-BNyqjTo3.js";import"./RSPContexts-BR0kwtoC.js";import"./OverlayArrow-Cnmawvtl.js";import"./useControlledState-DwXivsGS.js";import"./Collection-Bm_qpX5D.js";import"./CollectionBuilder-zDP_AyQT.js";import"./Separator-B7bt-k6s.js";import"./Group-BtU7cQ2J.js";import"./SearchField-BenY0OV9.js";import"./FieldError-DdRlRixc.js";import"./Form-1DUWHykH.js";import"./useTextField-DmJTXkvZ.js";import"./useFormReset-DRCEBnHw.js";import"./TextField-DHHX1OVE.js";import"./useEvent-rS73qyHD.js";import"./SelectionManager-B1xZchnP.js";import"./useCollator-CKm8HelV.js";import"./FocusScope-C1si8CoR.js";import"./VisuallyHidden-BKF9ViHg.js";import"./Switch-B8wcm431.js";import"./Label-DBV8eSx5.js";import"./useToggleState-U6u_Krhx.js";import"./Overlay-BIk0W5bM.js";import"./ButtonView-CRbshs7Y.js";import"./Heading-BpcFR_NP.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
