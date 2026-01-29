import{j as r}from"./iframe-DBKYLzDC.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BvGiLcXk.js";import{L as m}from"./Link-BrNU1KYR.js";import{H as s}from"./HeaderNavigation-BRVrDDxe.js";import{B as o}from"./Button-BFOZVdd1.js";import{T as p}from"./Text-gSr4j5A3.js";import{I as h}from"./Image-CNgyyHk0.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-2c7lOfO2.js";import{C as M,M as c}from"./MenuItem-DWaZWsVK.js";import{C as I}from"./ContextMenuTrigger-B5RaufFV.js";import"./ContextMenuSection-DLB9FUAU.js";import{a as T,M as k}from"./Modal-B4yG_S54.js";import{H}from"./Heading-DJddY0uQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./remote-CY71mNcv.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./utils-BUG9eo0Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-TYDADYlM.js";import"./usePress-BZ5qqTtf.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./dynamic-C4GhTGlQ.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DhKn1UU2.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./AlertIcon-BOzLdeCm.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./useStatic-DlOT-tNl.js";import"./getActionGroupSlot-BnE40Egr.js";import"./Popover-Chm2p3nv.js";import"./useOverlayController-CTM47RfB.js";import"./OverlayContextProvider-hZPIV4rO.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./Switch-DAvg3yPy.js";import"./useFieldComponent-DRt8IUS_.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./OverlayTrigger-Db-Qe3Sn.js";import"./DialogTriggerView-dF2Vs7YK.js";import"./Overlay-DF69rYRU.js";import"./ButtonView-CEeOUgiW.js";import"./Flex-C8uDBUHE.js";import"./Heading-BsK-SIF5.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
