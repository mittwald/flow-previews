import{j as r}from"./iframe-Bl4Z707A.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-BzUaRhpv.js";import{L as m}from"./Link-BDB5MTLS.js";import{H as s}from"./HeaderNavigation-BWA1xtcx.js";import{B as o}from"./Button-CAeJc8Z4.js";import{T as p}from"./Text-NIRm_0Gu.js";import{I as C}from"./Image-BXjQTYvi.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-2FzAVJXp.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CQqdH7Xa.js";import"./ContextMenuSection-NKfRt_X1.js";import{a as D,M as G}from"./Modal-CawzaanH.js";import{H as E}from"./Heading-DE_gUSoO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./context-DCYh_tbU.js";import"./utils-B5rgjLnQ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Cab7A3iT.js";import"./useFocus-CBM9z24y.js";import"./useFocusRing-CE5kArcs.js";import"./useFocusable-D6HN1uNY.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-RrbLYMgz.js";import"./Button-H_Ok05n0.js";import"./ProgressBar-Cbl5iDEF.js";import"./Label-G_0fE9c9.js";import"./Hidden-CHUtH-RP.js";import"./useLabel-CUTayXOd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CQSXz4Vb.js";import"./EmulatedBoldText-BAGT2_Bu.js";import"./Text-DhMTI7iw.js";import"./AlertIcon-BcABl2qu.js";import"./Action-Xhvrngkc.js";import"./context-BTbq7RPj.js";import"./useStatic-CbeUAfqO.js";import"./getActionGroupSlot-CiRXGJlD.js";import"./Popover-Be4hLP5F.js";import"./DialogTriggerView-y27VTJXE.js";import"./Dialog-DBqZXEFY.js";import"./RSPContexts-Cn8bYmaC.js";import"./OverlayArrow-BA0zDJHh.js";import"./useControlledState-CTldHWvB.js";import"./Collection-Ujk4Ju59.js";import"./CollectionBuilder-OReuuDhF.js";import"./Separator-CHUHKizG.js";import"./Group-C53hMQbG.js";import"./SearchField-C3XyOz-3.js";import"./FieldError-C8A_yU5e.js";import"./Form-Ch0FWOcT.js";import"./useTextField-B3Re73jf.js";import"./useFormReset-knu-9Cub.js";import"./TextField-BXBGjaTA.js";import"./useEvent-Bs-KGgDm.js";import"./SelectionManager-BhBrKG28.js";import"./useCollator-BR3Iakvu.js";import"./FocusScope-DPadz4__.js";import"./VisuallyHidden-DoxRRjGn.js";import"./Switch-BosdjKCc.js";import"./Label-CPCFvVkX.js";import"./useToggleState-CfuDefkJ.js";import"./Overlay-CzJxxVft.js";import"./Header-BxMCnhAN.js";import"./ButtonView-CXEWg-me.js";import"./Heading-Chi5TgUg.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
