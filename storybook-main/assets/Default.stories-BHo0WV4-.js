import{j as r}from"./iframe-Bh3xJiHl.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BO5-ThfV.js";import{L as m}from"./Link-CB2VB7oO.js";import{H as s}from"./HeaderNavigation-BmMGZSpC.js";import{B as o}from"./Button-C1GDS2T5.js";import{T as p}from"./Text-yap4nkEx.js";import{I as h}from"./Image-B2hLqv7g.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D-GYlTlE.js";import{C as M,M as c}from"./MenuItem-Ck1eV_yE.js";import{C as I}from"./ContextMenuTrigger-t2pu2qhP.js";import"./ContextMenuSection-rHl1P7lx.js";import{M as T}from"./ModalTrigger-G4NCNyAl.js";import{M as k}from"./Modal-BCLm9hzN.js";import{H}from"./Heading-OKG0Iw9H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./index-CTdhbmBU.js";import"./remote-Bp1RK0aJ.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./context-BR0BeWgQ.js";import"./utils-Dfx959rT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BHtMPlKM.js";import"./usePress-B8ZJpDXl.js";import"./useFocusRing-BHUB4uMx.js";import"./useFocusable-BqTTqTxS.js";import"./dynamic-Cx5ap73z.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNrfYXOb.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./useLabel-CXwac_uq.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-8DYgdl68.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Text-CYmLgYN4.js";import"./AlertIcon-BebRztpd.js";import"./ActionBatch-i2QcTjWd.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./Popover-DZO-XDYX.js";import"./OverlayContextProvider-nbeISQDl.js";import"./Dialog-CdFvlhxh.js";import"./RSPContexts-CiTjd_Cl.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";import"./Switch-CSI0fQNR.js";import"./useFieldComponent-DixKAqTB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5O0ruM.js";import"./useFormReset-CbcSutFk.js";import"./OverlayTrigger-xf6EpmWh.js";import"./DialogTriggerView-DuyfLrgU.js";import"./Overlay-2lTiqzcd.js";import"./ButtonView-DDvKz1ey.js";import"./Flex-BBxjU3qG.js";import"./Heading-DtIx3EFz.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
