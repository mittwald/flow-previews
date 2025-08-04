import{j as r}from"./iframe-CuW8Z7cC.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-zrofpdfr.js";import{L as m}from"./Link-D18CS-kn.js";import{H as s}from"./HeaderNavigation-Cy9-IfcD.js";import{B as o}from"./Button-D9Fw6D0O.js";import{T as p}from"./Text-BVSFkmOJ.js";import{I as C}from"./Image-DdNqJFSL.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-D8aG16fd.js";import{a as y,C as A,M as c}from"./ContextMenuContent-i4fF1btG.js";import"./ContextMenuSection-BYleIbQp.js";import{a as D,M as G}from"./Modal-Dp3Fr4Hp.js";import{H as E}from"./Heading-BwmXbbPu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./context-BYWbGN2W.js";import"./utils-CgS8DRaE.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-ChUiq42t.js";import"./useFocus-D7WquFnz.js";import"./useFocusRing-DouDeddi.js";import"./useFocusable-GYH2Xp93.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cg9hyS_b.js";import"./Button-XBmqNEFP.js";import"./ProgressBar-BpIwFtNJ.js";import"./Label-CGUx7qQt.js";import"./Hidden-Cabgeqjz.js";import"./useLabel-C7dUje6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DxBOFXa_.js";import"./EmulatedBoldText-CK46MGsP.js";import"./Text-DWn8KR_S.js";import"./AlertIcon-Chn9d8lE.js";import"./Action-BEJscuVN.js";import"./context-DcAOWEDn.js";import"./useStatic-MQhSGK4y.js";import"./getActionGroupSlot-DTumxqx2.js";import"./Popover-D_vujyJZ.js";import"./DialogTriggerView-C2lPzY4b.js";import"./Dialog-D1kraT3B.js";import"./RSPContexts-Cf0WAJYH.js";import"./OverlayArrow-CyeHV5yR.js";import"./useControlledState-BloqaAdM.js";import"./Collection-DVSzmKrY.js";import"./CollectionBuilder-B5oNNMRo.js";import"./Separator-BVlyHbVt.js";import"./Group-Dq-TZzFP.js";import"./SearchField-BtIhQoeP.js";import"./FieldError-C4CBNnNe.js";import"./Form-CVKq_8tp.js";import"./useTextField-D2_5QzKr.js";import"./useFormReset-BUJ4pXgh.js";import"./TextField-z_7EUq5A.js";import"./useEvent-CYDGvwkU.js";import"./SelectionManager-C2yhE_X5.js";import"./useCollator-B1wFiJa6.js";import"./FocusScope-C5C0qsLJ.js";import"./VisuallyHidden-DEeOB75f.js";import"./Switch-BOsWjesr.js";import"./Label-BtRITTXP.js";import"./useToggleState-BbgH5JnB.js";import"./Overlay-BwUljd-j.js";import"./Header-DmCtSRTT.js";import"./ButtonView-BwakS-na.js";import"./Heading-CwPuVFMm.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
