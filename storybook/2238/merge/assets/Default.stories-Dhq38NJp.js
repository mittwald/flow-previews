import{j as r}from"./iframe-B6FtZzVw.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-DEHpO9Uw.js";import{L as m}from"./Link-CSToEYYe.js";import{H as s}from"./HeaderNavigation-C5QSCFaU.js";import{B as o}from"./Button-HJgKWCOC.js";import{T as p}from"./Text-DPYEhwNL.js";import{I as h}from"./Image-DxmjgA3n.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-fUuttNRE.js";import{C as M,M as c}from"./MenuItem-Bi3PVbsN.js";import{C as I}from"./ContextMenuTrigger-BSBsD5_b.js";import"./ContextMenuSection-Hdwk65mt.js";import{a as T,M as k}from"./Modal-DTIoy73T.js";import{H}from"./Heading-DVq--lVl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./remote-B6WYv1J0.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./context-D8VymAHE.js";import"./utils-B053wNrY.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./dynamic-HxtCVU2-.js";import"./LoadingSpinner-DXuLs3WE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJB2g2P-.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./useLabel-CPIz2b8c.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D2cTR9e8.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./AlertIcon-CqMLsdbQ.js";import"./Action-BQfBXJkE.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./Popover-CXHYUzbK.js";import"./useOverlayController-B2SRK6I3.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./Dialog-CxhUJg_S.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";import"./Switch-JoNg0BX9.js";import"./useFieldComponent-BNMXDSB6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BW5ypBnh.js";import"./useFormReset-CRRhvvtY.js";import"./OverlayTrigger-DubAi8QM.js";import"./DialogTriggerView-D3K2Z-3A.js";import"./Overlay-DXEIJYls.js";import"./ButtonView-aYSYEUjK.js";import"./Flex-CKvWG9DE.js";import"./Heading-BVLRlyN8.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
