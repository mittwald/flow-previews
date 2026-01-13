import{j as r}from"./iframe-DoM-BIwg.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BD_MiEVG.js";import{L as m}from"./Link-CVu6uEhJ.js";import{H as s}from"./HeaderNavigation-Bg3ZJ-cb.js";import{B as o}from"./Button-CT5Y8uWS.js";import{T as p}from"./Text-lsEUOuuk.js";import{I as h}from"./Image-QAdDKG7N.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-_EfPfu08.js";import{C as M,M as c}from"./ContextMenu-DUoeFJuf.js";import{C as I}from"./ContextMenuTrigger-uZXkOw7N.js";import"./ContextMenuSection-fUiEQtti.js";import{a as T,M as k}from"./Modal-C8c0_XNG.js";import{H}from"./Heading-BBlWC_ix.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./remote-BDffDiLd.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./utils-D5il_mPj.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./dynamic-CkeXur7S.js";import"./LoadingSpinner-CPr3D27j.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./useLabel-Cp7FQmHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./AlertIcon-Mg7Q3zgv.js";import"./Switch-Da0k57Hq.js";import"./useFieldComponent-CZ4YFclL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ix8SyQp2.js";import"./useFormReset-DsbUUfuN.js";import"./useControlledState--GEywRyg.js";import"./VisuallyHidden-GPtOnQVg.js";import"./Dialog-BESdyj17.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./Action-KkrISRwO.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./getActionGroupSlot-CjJPVShT.js";import"./Popover-Cl8R87oW.js";import"./useOverlayController-DJQxd8wz.js";import"./OverlayContextProvider-Evthga4H.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./DialogTriggerView-0M0k7woF.js";import"./Overlay-DNYnXzeh.js";import"./ButtonView-CsTLUfbB.js";import"./Flex-CgxoNoP2.js";import"./Heading-Bf3wZM4z.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
