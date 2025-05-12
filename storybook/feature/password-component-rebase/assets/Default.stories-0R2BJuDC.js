import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-F2Fta7eo.js";import{n as B,o as H,i as S,p as v,q as C}from"./IconWarning-BXNHVn6I.js";import{L as m}from"./Link-svC3OXGo.js";import{H as s}from"./HeaderNavigation-Ds8so9qQ.js";import{B as o}from"./Button-FYdEfAPS.js";import{T as p}from"./Text-CSTNT9NW.js";import{I as L}from"./Image-B3lEEORk.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-D65q8Rz2.js";import{a as b,C as D,M as c}from"./ContextMenuContent-DRNbICnF.js";import"./ContextMenuSection-CrpLscK9.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CHfTfJIc.js";import{H as W}from"./Heading-GeYjpnxL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./utils-DsSK6wng.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-S4fA3fDW.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-FjZNoaNQ.js";import"./Button-xWdcV2_p.js";import"./ProgressBar-C0yX1I0t.js";import"./Label-DhTxnYZq.js";import"./Hidden-aaDrlwOM.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-D85TVzOv.js";import"./react-children-utilities-OrI0BXp-.js";import"./AlertIcon-CWGV6WGq.js";import"./Action-BLwy8x-7.js";import"./context-B4icoHkB.js";import"./useStatic-DZIU6iu_.js";import"./getActionGroupSlot-DgOV_5yI.js";import"./Popover-DRl0fYFJ.js";import"./OverlayTrigger-DIljMj1o.js";import"./Dialog-Btg-CSVS.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-DrRmwQ1y.js";import"./Collection-CXg7zLcg.js";import"./CollectionBuilder-YMr182AN.js";import"./Separator-9Mo8yYmd.js";import"./useOverlayTriggerState-DOVnl7Ya.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-BKm6wmXC.js";import"./Switch-BjMCes_Q.js";import"./Label-RNQn_NAE.js";import"./useToggleState-EOIY2_D7.js";import"./useFormReset-hDk0Ijlo.js";import"./Overlay-BJxU73Zi.js";import"./Header-YUHVgLiM.js";import"./ButtonView-HQlQ0pQD.js";import"./Heading-ASQfGrEK.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
