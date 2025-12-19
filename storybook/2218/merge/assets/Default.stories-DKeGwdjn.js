import{j as r}from"./iframe-VTkEMv55.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-D408DR62.js";import{L as m}from"./Link-DkhtPTod.js";import{H as s}from"./HeaderNavigation-CnqpSsxT.js";import{B as o}from"./Button-B9lvy9yg.js";import{T as p}from"./Text-DlbRcSah.js";import{I as h}from"./Image-CGI2K-Ci.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bom431z7.js";import{C as M,M as c}from"./MenuItem-BPSEa1n5.js";import{C as I}from"./ContextMenuTrigger-DZUBcdZH.js";import"./ContextMenuSection-CWe96eWW.js";import{a as T,M as k}from"./Modal-B1ltZaJ9.js";import{H}from"./Heading-DR27KtWq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./remote-pRnbNSGs.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./context-BVezW8pN.js";import"./utils-DPKXOmt2.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./dynamic-BSd9oB0r.js";import"./LoadingSpinner-BWeGH-7c.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKfoJr1S.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./useLabel-C-geoXZs.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-_Qir5MkB.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./AlertIcon-CHQuhrRU.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./Popover-DMia4ia0.js";import"./useOverlayController-BPG62MgI.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./Dialog-Qb8RaXBy.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";import"./Switch-BaU8B2ak.js";import"./useFieldComponent-CicShoBh.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5L8hNIKq.js";import"./useFormReset-DRm0nHwN.js";import"./OverlayTrigger-DkpyXFVa.js";import"./DialogTriggerView-CPJKS_ai.js";import"./Overlay-LH3kwvAv.js";import"./ButtonView-C04s0MYU.js";import"./Flex-DtSkCzIi.js";import"./Heading-DNyZLCgr.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
