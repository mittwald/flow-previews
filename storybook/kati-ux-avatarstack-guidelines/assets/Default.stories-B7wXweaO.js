import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-BISrBNHT.js";import{L as m}from"./Link-D09l1n3O.js";import{H as s}from"./HeaderNavigation-Cq_0VqiC.js";import{B as o}from"./Button-ffL0CoCo.js";import{T as p}from"./Text-DylZgEdN.js";import{I as L}from"./Image-HAUc1LRP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-CiZ-KZDk.js";import{a as b,C as D,M as c}from"./ContextMenuContent-h3E4Zlda.js";import"./ContextMenuSection-u2U6JCFR.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CEh0uUjm.js";import{H as W}from"./Heading-2TadGwUN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B7m4L5tI.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-B1eLbQ0a.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./context-C-2WHVw-.js";import"./utils-q_Aud5Js.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-XASE60p8.js";import"./Button-B8HIYCal.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./AlertIcon-CRsygt8U.js";import"./Action-ZjwDFC7S.js";import"./context-CKpxkOxA.js";import"./useStatic-CvMxFP3s.js";import"./getActionGroupSlot-Cs8-ENM2.js";import"./Popover-DCf4YTRU.js";import"./DialogTriggerView-DbOrwjmU.js";import"./Dialog-CnnCEkMG.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-Czdks72e.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-ClU3Y9Vn.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./Switch-CprnuEPm.js";import"./Label-C9bwHJat.js";import"./useToggleState-C8sObcIl.js";import"./useFormReset-B9LhY6oC.js";import"./Overlay--CKJ-_y0.js";import"./Header-edumKklg.js";import"./ButtonView-D5Syn5wk.js";import"./Heading-PKR8zMP8.js";const ro={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const oo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,oo as __namedExportsOrder,ro as default};
