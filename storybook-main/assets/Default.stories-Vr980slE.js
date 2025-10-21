import{j as r}from"./iframe-DALqHAyB.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CcDUp5xj.js";import{L as m}from"./Link-CeNoH_pB.js";import{H as s}from"./HeaderNavigation-rrSzFlKd.js";import{B as o}from"./Button-BbfkfOCO.js";import{T as p}from"./Text-BxJmp77a.js";import{I as h}from"./Image-BLGJJl6E.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D9OXafuu.js";import{C as M,M as c}from"./MenuItem-COpjurPp.js";import{C as I}from"./ContextMenuTrigger-aeKlUVWS.js";import"./ContextMenuSection-BiaSnVoU.js";import{a as T,M as k}from"./Modal-CMI2zivk.js";import{H}from"./Heading-lDiFG-iI.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./index-CPatoSxs.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./utils-C0MA_VWy.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./dynamic-aVFvjRkA.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./AlertIcon-DFMR_FFq.js";import"./Action-yEvGmIpX.js";import"./context-CWEo3fLe.js";import"./useStatic-WJbJZsQS.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./Popover-CrnBVe2l.js";import"./useOverlayController-DLM_LHaF.js";import"./OverlayContextProvider-DuttmE5t.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./ClearPropsContext-frWmeUQW.js";import"./Switch-BaDq03Gc.js";import"./useFieldComponent-CuLkv2Wr.js";import"./react-children-utilities-C1NF1MDP.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./useToggleState-D_bLNmdj.js";import"./useFormReset-C8DxwuW7.js";import"./OverlayTrigger-DCsddSuz.js";import"./ControlledNotification-CAzCaSM8.js";import"./DialogTriggerView-BSMVCTCX.js";import"./Overlay-B8G2jHHV.js";import"./ButtonView-D7TVCJVK.js";import"./Heading-BEFcq9oy.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
