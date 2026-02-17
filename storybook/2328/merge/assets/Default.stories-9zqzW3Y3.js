import{j as r}from"./iframe-olJof__V.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Dxqo3db7.js";import{L as m}from"./Link-zAbyTmSL.js";import{H as s}from"./HeaderNavigation-qxS62tk6.js";import{B as o}from"./Button-CPlz8rsS.js";import{T as p}from"./Text-Dd-S15-B.js";import{I as h}from"./Image-BTIypaSk.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Df7PeMRZ.js";import{C as M,M as c}from"./MenuItem-CET-BlYw.js";import{C as I}from"./ContextMenuTrigger-DkBWWFGu.js";import"./ContextMenuSection-C9tKIY6H.js";import{M as T}from"./ModalTrigger-CBUxzRvi.js";import{M as k}from"./Modal-DS-pjQYs.js";import{H}from"./Heading-CFjejIim.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./remote-BFSWQwUW.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./utils-B7tchdhx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C7qSpl6p.js";import"./usePress-UZLq5kUQ.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./dynamic-C_FBHMxE.js";import"./LoadingSpinner-CT-rb4W5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./useLabel-CtYRRhYq.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./AlertIcon-DL26tbpe.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./Popover-5M2oEFmF.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./Dialog-DOR07iZd.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./Switch-CtXhHT6w.js";import"./useFieldComponent-BI2nSVzd.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dlp4u6PD.js";import"./useFormReset-BYGWiUrU.js";import"./OverlayTrigger-CdRn1WXI.js";import"./DialogTriggerView-DJfbuzoO.js";import"./Overlay-CYa-63WO.js";import"./ButtonView-BwM21LNf.js";import"./Flex-6XeWCvWa.js";import"./Heading-CZbujKCp.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
