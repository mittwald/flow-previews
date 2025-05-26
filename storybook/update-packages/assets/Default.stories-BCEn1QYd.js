import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-CNxTpz-G.js";import{L as m}from"./Link-BhFzlzB6.js";import{H as s}from"./HeaderNavigation-DJAII0Im.js";import{B as o}from"./Button-CbN8Qn6V.js";import{T as p}from"./Text-DqBkWPX0.js";import{I as L}from"./Image-C_7p0Plq.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-D1sokLzE.js";import{a as b,C as D,M as c}from"./ContextMenuContent-Cb8rNRRT.js";import"./ContextMenuSection-lYIm3Wsn.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-XDi8HA9D.js";import{H as W}from"./Heading-uK_gBwm9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADM7KP_B.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./utils-Bm37ngJk.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CC9yd5Fh.js";import"./useFocus-C3ExUvEL.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocusable-CzgSXE3t.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BT51OXM_.js";import"./Button-3GcZ2y2i.js";import"./ProgressBar-lRSo0OUL.js";import"./Label-B_sU3NXB.js";import"./Hidden-DwT0szmK.js";import"./useLabel-BQ8zpiVY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-I7rzu-gq.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-QDb6lgt2.js";import"./Action-Cl6JccS9.js";import"./context-Cku6jByl.js";import"./useStatic-BrY-dsbP.js";import"./getActionGroupSlot-C3DYPhlZ.js";import"./Popover-C4B47nlu.js";import"./OverlayTrigger-DY12d_17.js";import"./Dialog-DHB7afQp.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CyRBwams.js";import"./useControlledState-YIijONQK.js";import"./Collection-43aF_0U7.js";import"./CollectionBuilder--ipx_qrV.js";import"./Separator-By-KuC_f.js";import"./SelectionManager-W-F9tXjW.js";import"./useEvent-Dw3zA1wO.js";import"./useCollator-rVor1fd8.js";import"./FocusScope--xlp8sQI.js";import"./VisuallyHidden-C4REVXC4.js";import"./DialogTriggerView-BwEKSqnI.js";import"./Switch-DyZ3EHGe.js";import"./Label-B4ewt7OD.js";import"./useToggleState-BrsYFbbM.js";import"./useFormReset-gF4HkNmA.js";import"./Overlay-DmF-16Gp.js";import"./Header-BngZQdZe.js";import"./ButtonView-mBPI_WP8.js";import"./Heading-4pNfXNbn.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
