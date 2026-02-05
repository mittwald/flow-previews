import{j as r}from"./iframe-BL1IY_6V.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BTI7YBWG.js";import{L as m}from"./Link-Br8jdhIY.js";import{H as s}from"./HeaderNavigation-DXv9F4t9.js";import{B as o}from"./Button-B7zQBVb0.js";import{T as p}from"./Text-BSlhLkmN.js";import{I as h}from"./Image-FwT2sw4o.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BDSWcHwm.js";import{C as M,M as c}from"./MenuItem-DVc0Ku48.js";import{C as I}from"./ContextMenuTrigger-C2WcmNSl.js";import"./ContextMenuSection-JBlJYK6m.js";import{a as T,M as k}from"./Modal-CN1Wuiku.js";import{H}from"./Heading-Weu1gBHD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./remote-BuZW91cH.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./utils-GyL2rjZN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-D7_v9YO6.js";import"./usePress-CxRwZ9-L.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./dynamic-Dn3YQ50F.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DogRo3Wh.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./AlertIcon-B2R_BHtC.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./Popover-B7Z0vypa.js";import"./useOverlayController-D_GPxB6v.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./Switch-BaHFFbbk.js";import"./useFieldComponent-oZ5IqIdY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSM3AEzw.js";import"./useFormReset-C4J5P-lS.js";import"./OverlayTrigger-D4p9MH82.js";import"./DialogTriggerView-Cm8LXjtf.js";import"./Overlay-gaLO_3ES.js";import"./ButtonView-DNg_Qy4d.js";import"./Flex-xaZiMh7i.js";import"./Heading-CMaaNVI7.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
