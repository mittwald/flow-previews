import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import"./IconApp-CRBZNQVh.js";import{k as B,l as H,g as S,m as v,n as C}from"./IconWarning-DOXxmL8u.js";import{L as m}from"./Link-K23BjNsI.js";import{H as s}from"./HeaderNavigation-8vm1Zrdr.js";import{B as o}from"./Button-CEu5AYHl.js";import{T as p}from"./Text-gEgSdrgY.js";import{I as L}from"./Image-CGEoCEdW.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-BlXJbS7x.js";import{a as b,C as D,M as c}from"./ContextMenuContent-BxR-TNiF.js";import"./ContextMenuSection-BkyB3QUj.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./ModalTrigger-DIjqs3Ec.js";import{H as W}from"./Heading-DGcDoxeu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DCw3d_mi.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./utils-pqn3Medm.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-mPwC5UWg.js";import"./useFocus-Csiud3ul.js";import"./useFocusRing-Dj3VKvGJ.js";import"./useFocusable-D_uDDaTh.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BNNKZnfN.js";import"./Button-CponIIJZ.js";import"./ProgressBar-SARi2bur.js";import"./Label-BuTtJRrE.js";import"./Hidden-Dd0lSYNZ.js";import"./useLabel-D55R0JPp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-DfUCrkqY.js";import"./react-children-utilities-DxL90CBS.js";import"./Action-Bf0wozDn.js";import"./context-APykQLEx.js";import"./useStatic-DqbzTIVw.js";import"./getActionGroupSlot-DPD4Fb3w.js";import"./Popover-CK6-A-iV.js";import"./MenuTrigger-DyPHLNSQ.js";import"./Dialog-CnYyMROF.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-BoaxqqrH.js";import"./useControlledState-BKUqB07S.js";import"./Collection-Bp8QgIDg.js";import"./CollectionBuilder-CLaaElit.js";import"./Separator-DwNpDsab.js";import"./SelectionManager-D1BeontN.js";import"./useEvent-BsCm9_LL.js";import"./useCollator-BGnAy9ct.js";import"./FocusScope-S3AisjuN.js";import"./VisuallyHidden-BArB4NIa.js";import"./Popover.module-BrgV6PVx.js";import"./DialogTriggerView-Cs9bVuDT.js";import"./Switch-DHh1HPc_.js";import"./Label-B5kMao0p.js";import"./useToggleState-Bs-eMZVG.js";import"./useFormReset-Bj6qxEZP.js";import"./Overlay-D506KWGN.js";import"./Header-HKrLw2tr.js";import"./ButtonView-Cui4eM8j.js";import"./Heading-CEmE2-bf.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
