import{j as r}from"./iframe-BZLAsPNC.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BRgKnpuG.js";import{L as m}from"./Link-DGFdzo1Q.js";import{H as s}from"./HeaderNavigation-CxPWk6PZ.js";import{B as o}from"./Button-CSRJ_rM3.js";import{T as p}from"./Text-oqqebshB.js";import{I as h}from"./Image-Chfs7QIE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Ck8xQEJR.js";import{C as M,M as c}from"./ContextMenu-BKmodNnt.js";import{C as I}from"./ContextMenuTrigger-DwSq8C9_.js";import"./ContextMenuSection-B5_hjl5E.js";import{a as T,M as k}from"./Modal-tAi_cNj1.js";import{H}from"./Heading-CmA86V_y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./remote-DD9qKW4I.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./context-B1QKiSyt.js";import"./utils-GBJhPEt0.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./dynamic-DRBl70hS.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./useLabel-DAhF5fA-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D75BLayN.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./AlertIcon-wpFTQr76.js";import"./Switch-DFdonVPE.js";import"./useFieldComponent-C5gewvzz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D_Xkru6C.js";import"./useFormReset-B4usOE4z.js";import"./useControlledState-BdOl-nfx.js";import"./VisuallyHidden-B55KrhOv.js";import"./Dialog-BHTl5ZpY.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./Popover-aQEA2L0G.js";import"./useOverlayController-C7H6e68I.js";import"./OverlayContextProvider-BlSJPydV.js";import"./OverlayTrigger-CosWzk9C.js";import"./DialogTriggerView-g-aoQSsp.js";import"./Overlay-Cg8E6rxU.js";import"./ButtonView-DfyaGCHA.js";import"./Flex-qY5lb4LI.js";import"./Heading-Bg25gZBW.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
