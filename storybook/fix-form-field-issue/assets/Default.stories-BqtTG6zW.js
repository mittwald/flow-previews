import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-70jApbHx.js";import{L as m}from"./Link-C5bm18vW.js";import{H as s}from"./HeaderNavigation-D2T7EE--.js";import{B as o}from"./Button-CT6jKELJ.js";import{T as p}from"./Text-9PUJLXl5.js";import{I as L}from"./Image-DQ-87tny.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-BT-COonu.js";import{a as b,C as D,M as c}from"./ContextMenuContent-ChUt7sP9.js";import"./ContextMenuSection-bZO6InGK.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-DJCrQa6I.js";import{H as W}from"./Heading-bJ8ZWrvE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yY6RzzUT.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./utils-DvYDvJ-W.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BHQSc97o.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./useLabel-DP9zv8XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-1CJ30n_Q.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-0Mrbq7jC.js";import"./Action-BASfP4Hw.js";import"./context-DnKpt6Zm.js";import"./useStatic-CLm-J0DW.js";import"./getActionGroupSlot-BoNoL21H.js";import"./Popover-Dr9LZuKh.js";import"./OverlayTrigger-Bwrcht6a.js";import"./Dialog-WcTWvLN6.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./useCollator-Cym9_BaK.js";import"./FocusScope-BCiwkv3e.js";import"./VisuallyHidden-B4AzoGqn.js";import"./DialogTriggerView-APD_Z0jH.js";import"./Switch-hEiY1pJD.js";import"./Label-Bp6Pnofu.js";import"./useToggleState-DghbFXGk.js";import"./useFormReset-BiMHJINb.js";import"./Overlay-KuYMejww.js";import"./Header-Dz61db-b.js";import"./ButtonView-SJ4ZBLK3.js";import"./Heading-BFHXViOZ.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
