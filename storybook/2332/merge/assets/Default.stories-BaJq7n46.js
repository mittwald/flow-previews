import{j as r}from"./iframe-COJ9RE48.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BMwiqmvN.js";import{L as m}from"./Link-D5t64BFC.js";import{H as s}from"./HeaderNavigation-C3bNuJsz.js";import{B as o}from"./Button-CMQanS4m.js";import{T as p}from"./Text-Bzpr-GrC.js";import{I as h}from"./Image-DMoyIdSC.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BwHSrrrF.js";import{C as M,M as c}from"./MenuItem-6Ge2i2CE.js";import{C as I}from"./ContextMenuTrigger-kuKBQI7o.js";import"./ContextMenuSection-BD_6r0jM.js";import{M as T}from"./ModalTrigger-D0Fl0yaW.js";import{M as k}from"./Modal-DApCOQ01.js";import{H}from"./Heading-DxYLpioN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./remote-BHpqvLOn.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./utils-mqorQ4Bj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C0sdQCtL.js";import"./usePress-CI06DRQW.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./dynamic-CTxK5DLa.js";import"./LoadingSpinner-CBTolouR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./useLabel-CDG97Ijf.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./AlertIcon-BTDbiAGg.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./getActionGroupSlot-CmDqFskk.js";import"./Popover-BIPjdJIA.js";import"./OverlayContextProvider-CBc03cFF.js";import"./Dialog-Bn1iAsfr.js";import"./RSPContexts-CacVUoYW.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./Switch-1zAbfOeR.js";import"./useFieldComponent-C2vXV8Pm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BmWJDr6D.js";import"./useFormReset-BVeU8GRO.js";import"./OverlayTrigger-CWnPf4Dw.js";import"./DialogTriggerView-Dtu4XRgJ.js";import"./Overlay-DCP7Ml7p.js";import"./ButtonView-BPjbrkaq.js";import"./Flex-DKLR47fR.js";import"./Heading-5-Pxsrno.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
