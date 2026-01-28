import{j as r}from"./iframe-BE2KIrNP.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-pheKtU5F.js";import{L as m}from"./Link-DFoDqMYl.js";import{H as s}from"./HeaderNavigation-viZ1lp5z.js";import{B as o}from"./Button-DTG6_onu.js";import{T as p}from"./Text-99qeYwSw.js";import{I as h}from"./Image-DRB1qpyA.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-St5qIscv.js";import{C as M,M as c}from"./ContextMenu-D8I6UbrO.js";import{C as I}from"./ContextMenuTrigger-Bfqio4yp.js";import"./ContextMenuSection-DMoRGuCw.js";import{a as T,M as k}from"./Modal-9LpO6UTM.js";import{H}from"./Heading-C03aqcaL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./remote-BDPI1xTN.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./utils-CetDBScY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-D19rPtJ7.js";import"./usePress-wlnUrUkL.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocusable-PS7GdwKW.js";import"./dynamic-DKw0AuDc.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./useLabel-DlCzrbVx.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B5VZQlUE.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./AlertIcon-BSS6Y7Aa.js";import"./Switch-BJabR53n.js";import"./useFieldComponent-8fOA-m-u.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-4MRD1tqn.js";import"./useFormReset-DGFO0EL0.js";import"./useControlledState-O9ITVI5k.js";import"./VisuallyHidden-KypC6JrD.js";import"./Dialog-C3P1Ogqg.js";import"./RSPContexts-B5Mb9Vey.js";import"./OverlayArrow-B7hxVbyO.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./Popover-Ba9XQcrf.js";import"./useOverlayController-CtV9FOyM.js";import"./OverlayContextProvider-DV_-MJEg.js";import"./OverlayTrigger-DnihfWmG.js";import"./DialogTriggerView-DaQfVr-6.js";import"./Overlay-CsfPziU8.js";import"./ButtonView-BKjPbsQ0.js";import"./Flex-DXiziiVL.js";import"./Heading-CDAU15CX.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
