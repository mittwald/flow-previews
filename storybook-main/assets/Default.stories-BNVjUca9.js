import{j as r}from"./iframe-_AHHYLe8.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-CK_fmTss.js";import{L as m}from"./Link-BvyDULsm.js";import{H as s}from"./HeaderNavigation-C1CtslJe.js";import{B as o}from"./Button-DpBb7dXP.js";import{T as p}from"./Text-Cmtv_jKA.js";import{I as C}from"./Image-BrKl7dK9.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-u54SOV_h.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DZwGiOem.js";import"./ContextMenuSection-BJaXJ97q.js";import{a as D,M as E}from"./Modal-BxC8KpEB.js";import{H as G}from"./Heading-X58ltJnb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./context-CUyryTbq.js";import"./utils-q-IwrKfZ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DSHe1cmn.js";import"./useFocus-Cc4rXbR6.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DRmJrHkB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C5j2D-85.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./useLabel-lAnn0GIu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./Text-Bojy_plc.js";import"./AlertIcon-DQ1Eq19D.js";import"./Action-DvAxFpQR.js";import"./context-CggRfmhL.js";import"./useStatic-D0qKbiKB.js";import"./getActionGroupSlot-NbcIocov.js";import"./Popover-D4dqet6R.js";import"./DialogTriggerView-v_JnIB7x.js";import"./Dialog-CHTGTlq0.js";import"./RSPContexts-D87DkYMD.js";import"./OverlayArrow-QRBdoqIe.js";import"./useControlledState-Ck4hxHjX.js";import"./Collection-CCW92VXm.js";import"./CollectionBuilder-ZwH2Lf2j.js";import"./Separator-Dnk3E0kw.js";import"./Group-DIV0b_ks.js";import"./SearchField-BDX95NUI.js";import"./FieldError-7uZDpm9k.js";import"./Form-1aZb-GsH.js";import"./useTextField-DtgE5gD9.js";import"./useFormReset-BXtaLb8e.js";import"./TextField-D1FfviRQ.js";import"./useEvent-Chot4vqs.js";import"./SelectionManager-BurdSYdt.js";import"./useCollator-motRCGH3.js";import"./FocusScope-s_Xca6uO.js";import"./VisuallyHidden-WDbGyUVH.js";import"./Switch-upjwOqp8.js";import"./Label-CmGN6q6h.js";import"./useToggleState-DAg0Gp2k.js";import"./Overlay-D3bGX2jK.js";import"./ButtonView-DImS9OAk.js";import"./Heading-C2hoDKBp.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
