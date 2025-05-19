import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-BfCxllvU.js";import{L as m}from"./Link-CP--T0VS.js";import{H as s}from"./HeaderNavigation-CqGiBZFM.js";import{B as o}from"./Button-BkLN5yqq.js";import{T as p}from"./Text-CMhZhUjQ.js";import{I as L}from"./Image-DxPBlec1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-Cgw0CcKL.js";import{a as b,C as D,M as c}from"./ContextMenuContent-DX9L08Zy.js";import"./ContextMenuSection-BMBrYBOr.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-BE3HYA6Z.js";import{H as W}from"./Heading-D-vljNMj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-oYcASNxB.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-fu3AYNvc.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./utils-B2jHvTU8.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-J3t5Qa20.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BFm3A-sb.js";import"./Button-0sHIpBCS.js";import"./ProgressBar-D87xnYtB.js";import"./Label-DULpRqFS.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-BTthEqzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-bCwBREBS.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-ywf1JnGq.js";import"./Action-BSRqBkuu.js";import"./context-CCy8vamI.js";import"./useStatic-7xPaRTmN.js";import"./getActionGroupSlot-CRoTR5kR.js";import"./Popover-DK-bOdpJ.js";import"./OverlayTrigger-CGsQguv8.js";import"./Dialog-6hciMxaP.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BSrl9XNn.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-DiFzyIMP.js";import"./CollectionBuilder-CBZ2qMwz.js";import"./Separator-C9CvzOtQ.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./DialogTriggerView-0K4Jv4is.js";import"./Switch-BjT8T2DS.js";import"./Label-W9U2xXtb.js";import"./useToggleState-CB219K95.js";import"./useFormReset-dEmc_A_j.js";import"./Overlay-DEgMKvow.js";import"./Header-Lo9c_fo4.js";import"./ButtonView-DSVG4iOt.js";import"./Heading-FTY3VzEi.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
