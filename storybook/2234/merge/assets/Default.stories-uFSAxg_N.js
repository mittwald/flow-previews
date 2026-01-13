import{j as r}from"./iframe-y-Qy_Rwm.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CSZkcfVi.js";import{L as m}from"./Link-BM40k55f.js";import{H as s}from"./HeaderNavigation-eU2aU-L5.js";import{B as o}from"./Button-BD4RfixQ.js";import{T as p}from"./Text-Dc6HCiIC.js";import{I as h}from"./Image-CGTf5U1C.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CLNZ0s2N.js";import{C as M,M as c}from"./ContextMenu-BdM_eL6w.js";import{C as I}from"./ContextMenuTrigger-Rw5n6N--.js";import"./ContextMenuSection-UUsl5yAi.js";import{a as T,M as k}from"./Modal-DY61oaxh.js";import{H}from"./Heading-BvcdH5AE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./remote-DXSfp6Hy.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./utils-Ek_OXClQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./dynamic-DOzqWg4O.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./useLabel-oIpNFQLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./AlertIcon-B-ySDH61.js";import"./Switch-DtQRyVzP.js";import"./useFieldComponent-BPtwnKvp.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Chk4kJZ9.js";import"./useFormReset-DmoJehYX.js";import"./useControlledState-BivKNDQQ.js";import"./VisuallyHidden-uuI_aPdk.js";import"./Dialog-yt0PwtsU.js";import"./RSPContexts-D6kJ8Blw.js";import"./OverlayArrow-BfgbGjhP.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./Action-DCkGWMlj.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./Popover-E3KXF6KA.js";import"./useOverlayController-BBvbe3oK.js";import"./OverlayContextProvider-B0VW5X20.js";import"./OverlayTrigger-Ikn2lzdj.js";import"./DialogTriggerView-Dd5DMHsr.js";import"./Overlay-UL5i-JNy.js";import"./ButtonView-2pcXgB5i.js";import"./Flex-1lc_6aM5.js";import"./Heading-DBwZPojJ.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
