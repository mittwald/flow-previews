import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-CmBGtQX9.js";import{L as m}from"./Link-DZqLbVOn.js";import{H as s}from"./HeaderNavigation-BC0HRi1z.js";import{B as o}from"./Button-816gfjTU.js";import{T as p}from"./Text-etVVdpAy.js";import{I as L}from"./Image-H3DLDyRr.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-Cg4E0LJ_.js";import{a as b,C as D,M as c}from"./ContextMenuContent-BR2QiR0m.js";import"./ContextMenuSection-jaJtJ36m.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-B1a0k8T0.js";import{H as W}from"./Heading-B47jxBXV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-AVUEe6bt.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-O6_Uh9IU.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./utils-q_Aud5Js.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-KGAshMPr.js";import"./Button-BV9jeieD.js";import"./ProgressBar-DbWwTk60.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./AlertIcon-Byz6h00e.js";import"./Action-DzFStUms.js";import"./context-CUF9Zx5q.js";import"./useStatic-DuT5E8G_.js";import"./getActionGroupSlot-CW6fhpC2.js";import"./Popover-BstZ40z7.js";import"./DialogTriggerView-VcKilUT7.js";import"./Dialog-HD9t1mUg.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-fUY3Kb5L.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-DweNvqjD.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-DWYYoDxV.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./Switch-BZG_A3JU.js";import"./Label-BvpwjXNw.js";import"./useToggleState-C8sObcIl.js";import"./useFormReset-B9LhY6oC.js";import"./Overlay-DCatqWIA.js";import"./Header-Bgf-s0o7.js";import"./ButtonView-DciWlb9b.js";import"./Heading-PKR8zMP8.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
