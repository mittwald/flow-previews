import{j as r}from"./iframe-Czt-X4mt.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CEtgECHE.js";import{L as m}from"./Link-LTFE4TsB.js";import{H as s}from"./HeaderNavigation-NIHLIFqT.js";import{B as o}from"./Button-CD6msFpC.js";import{T as p}from"./Text-8ynHQhOY.js";import{I as h}from"./Image-AOGTDSBx.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-nxdk2h98.js";import{C as M,M as c}from"./MenuItem-B5z2qnS9.js";import{C as I}from"./ContextMenuTrigger-BTcSczWB.js";import"./ContextMenuSection-CUYBU0Kr.js";import{a as T,M as k}from"./Modal-CLhWvci7.js";import{H}from"./Heading-53sbNT6w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./remote-hRcAmPck.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./utils-CU6JriEK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-En_BVabG.js";import"./usePress-DEVH16Jn.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./dynamic-BXoid3qz.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./useLabel-BR4TCRo_.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CPd8oh-y.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./AlertIcon-DBLlr2Uy.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./useStatic-C0a0tu6G.js";import"./getActionGroupSlot-5QVk2C33.js";import"./Popover-B8tcz0Bd.js";import"./useOverlayController-D_3uUTDx.js";import"./OverlayContextProvider-DqUVzQmH.js";import"./Dialog-CYkX7YiI.js";import"./RSPContexts-BGSIbyEV.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";import"./Switch-DZeWCQbp.js";import"./useFieldComponent-CjTkiSgD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BLpJhXEB.js";import"./useFormReset-5KG7Gyo5.js";import"./OverlayTrigger-D2Ur5kvg.js";import"./DialogTriggerView-DoN4sLs4.js";import"./Overlay-C6cuWkJv.js";import"./ButtonView-COtP3lz8.js";import"./Flex-BHd1BINB.js";import"./Heading-DpW_T125.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
