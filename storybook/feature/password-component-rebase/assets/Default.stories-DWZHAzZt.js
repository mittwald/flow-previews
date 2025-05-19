import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-CK356P05.js";import{L as m}from"./Link--DYaZhg1.js";import{H as s}from"./HeaderNavigation-CjUONvYj.js";import{B as o}from"./Button-78qkFCMJ.js";import{T as p}from"./Text-DkYh63l_.js";import{I as L}from"./Image-Bxon77e0.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-Hw7ZOwW7.js";import{a as b,C as D,M as c}from"./ContextMenuContent-GouwhbAX.js";import"./ContextMenuSection-ThhZDKqp.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-BcIZgvAd.js";import{H as W}from"./Heading-DLFgi0e6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVKy8vv7.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-CKDvs4CE.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./utils-k5T1Axi4.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-zZ6fpTQi.js";import"./Button-DMR6N1Wj.js";import"./ProgressBar-CwgzMXGv.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-BTthEqzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-CCjUyjXh.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-Bz28XKC6.js";import"./Action-C2wp0mH9.js";import"./context-BoSU1-cj.js";import"./useStatic-WqapJzYO.js";import"./getActionGroupSlot-G_IXla-u.js";import"./Popover-BOp8uyZA.js";import"./OverlayTrigger-BxSd3nDI.js";import"./Dialog-9stIWeEN.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C2rzDuF5.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CmGWUGtX.js";import"./CollectionBuilder-CZDODqbS.js";import"./Separator-Cy_qZ13i.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./DialogTriggerView-DLxkP1wu.js";import"./Switch-BpGZd-5C.js";import"./Label-bqUfW7BT.js";import"./useToggleState-CJsTx8sI.js";import"./useFormReset-dEmc_A_j.js";import"./Overlay-BNMTbCAK.js";import"./Header-DU1tpwjv.js";import"./ButtonView-qQRl1X8_.js";import"./Heading-Cb89GJ6J.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
