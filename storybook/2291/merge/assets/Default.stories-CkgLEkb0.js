import{j as r}from"./iframe-1hZ9wzBW.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Bq_05zLs.js";import{L as m}from"./Link-CzWTZWql.js";import{H as s}from"./HeaderNavigation-DyyAK6jI.js";import{B as o}from"./Button-7Po4DI29.js";import{T as p}from"./Text-BF_GklVB.js";import{I as h}from"./Image-DXQuT_X6.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-B41KUjsA.js";import{C as M,M as c}from"./MenuItem-zK2jxrhp.js";import{C as I}from"./ContextMenuTrigger-CzZk0wZa.js";import"./ContextMenuSection-CZDIsfmP.js";import{a as T,M as k}from"./Modal-BoYZY_3b.js";import{H}from"./Heading-CHsPWFD7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./remote-CnwnRZPi.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./utils-CnJx27u5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-iMNco4FL.js";import"./usePress-DNGT1V3C.js";import"./useFocusRing-DJmPDLK7.js";import"./useFocusable-CvXOfqVX.js";import"./dynamic-BsriuUgB.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./useLabel-CrikywT0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-jjcexMIs.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./Text-B1mgaTQV.js";import"./AlertIcon-fApV2-nR.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./getActionGroupSlot-BJec6nln.js";import"./Popover-Bxp3aiNM.js";import"./useOverlayController-C-EZcKCT.js";import"./OverlayContextProvider-DZK4ly6O.js";import"./Dialog-DTOlRROi.js";import"./RSPContexts-Da-kz4p_.js";import"./OverlayArrow-CJR0hx1K.js";import"./useControlledState-DAXJPifs.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./Switch-B2FN3fmU.js";import"./useFieldComponent-B-hW6CDY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C-m4j_t7.js";import"./useFormReset-HcR3N4q2.js";import"./OverlayTrigger-DkAzLvEk.js";import"./DialogTriggerView-DYxd4bgi.js";import"./Overlay-ClLZJ_dq.js";import"./ButtonView-DUby8yC0.js";import"./Flex-x6MOQWM3.js";import"./Heading-BDZkQl9H.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
