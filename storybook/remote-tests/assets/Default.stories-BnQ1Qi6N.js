import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import"./IconApp-DtTJ2r0A.js";import{l as B,m as H,h as S,n as v,o as C}from"./IconWarning-BwSZGWRf.js";import{L as m}from"./Link-DLeFshbm.js";import{H as s}from"./HeaderNavigation-DDznNPa3.js";import{B as o}from"./Button-y_xQsClG.js";import{T as p}from"./Text-BoP-iRG5.js";import{I as L}from"./Image-BHuclVyO.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-9p84LjLC.js";import{a as b,C as D,M as c}from"./ContextMenuContent-BR1O7Y6I.js";import"./ContextMenuSection-CPhM0sZK.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CuC9jL8n.js";import{H as W}from"./Heading-tfuBRgBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./utils-DDUQIigj.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DbRP1bJP.js";import"./Button-DL5r24IA.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Text-yNWxiVQR.js";import"./react-children-utilities-BxrMh-22.js";import"./Action-i0thx0q2.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./Popover-DCVTWAuz.js";import"./OverlayTrigger-wtZR0Cj_.js";import"./Dialog-6iLCfCA_.js";import"./RSPContexts-BTRAHvSh.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./useCollator-BnjbLxAL.js";import"./FocusScope-DxW0A0A2.js";import"./VisuallyHidden-Dk-02uN1.js";import"./DialogTriggerView-BBAvKYPc.js";import"./Switch-k93aCWHK.js";import"./Label-Ci6hAk30.js";import"./useToggleState-C0lsVYkc.js";import"./useFormReset-Cvvd9M-x.js";import"./Overlay-CtoHAtfF.js";import"./Header-BJ8AGauZ.js";import"./ButtonView-CXnuD52B.js";import"./Heading-BGdWAVxG.js";const ro={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const oo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,oo as __namedExportsOrder,ro as default};
