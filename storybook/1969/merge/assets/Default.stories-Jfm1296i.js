import{j as r}from"./iframe-DcFGg16D.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CHPRxwlr.js";import{L as m}from"./Link-DQW6N6eW.js";import{H as s}from"./HeaderNavigation-B_YcRLri.js";import{B as o}from"./Button-DJ4LLcBR.js";import{T as p}from"./Text-DMVvzt3E.js";import{I as C}from"./Image-B1fJC69I.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-t-qtsHDE.js";import{a as y,C as A,M as c}from"./ContextMenuContent-xu6qvb_W.js";import"./ContextMenuSection-D_jMxJT1.js";import{a as D,M as E}from"./Modal-BjFrMvmk.js";import{H as G}from"./Heading-n_TZDmqA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./context-2JOSlQoN.js";import"./utils-MGL4-aZB.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Dxku2mh7.js";import"./useFocus-U4AMFjB6.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocusable-CBHGItg9.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B2KP9AW1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-eLaBErzq.js";import"./ProgressBar-B1oFmI6J.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./useLabel-BWfTCaKH.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CVxrqIOh.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./Text-Bo-pyWRw.js";import"./AlertIcon-C1ZFlsX4.js";import"./Action-BHkIIo1y.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";import"./getActionGroupSlot-CBzmOk9k.js";import"./Popover-DNcGxoGD.js";import"./DialogTriggerView-I--QKd5T.js";import"./Dialog-BjymA24M.js";import"./RSPContexts-BGgHSZk2.js";import"./OverlayArrow-D67G4pFu.js";import"./useControlledState-ecFtZ1Px.js";import"./Collection-DSC_s3_U.js";import"./CollectionBuilder-C1fftWwC.js";import"./Separator-RxFnsY_N.js";import"./Group-Cfinkx-g.js";import"./SearchField-DOOJGDQj.js";import"./FieldError-Dg2s55Gd.js";import"./Form-67TyawWi.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./TextField-DxEII3el.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./useCollator-IqIPfKpf.js";import"./FocusScope-Csa5zz-0.js";import"./VisuallyHidden-MvD6uM4h.js";import"./Switch-BcQpN0U0.js";import"./Label-DUWIrMUF.js";import"./useToggleState-TwUwQFtk.js";import"./Overlay-DFLygIqB.js";import"./ButtonView-j4haeJiF.js";import"./Heading-B3gs3td_.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
