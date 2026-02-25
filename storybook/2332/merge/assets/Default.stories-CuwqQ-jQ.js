import{j as r}from"./iframe-DewKgIpk.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CrJxptLM.js";import{L as m}from"./Link-_1TKWVxp.js";import{H as s}from"./HeaderNavigation-CHUo-Ixz.js";import{B as o}from"./Button-DK1DwTQu.js";import{T as p}from"./Text-CAhyjFWz.js";import{I as h}from"./Image-4EK57wLA.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CeozoAQa.js";import{C as M,M as c}from"./MenuItem-alNbuu-j.js";import{C as I}from"./ContextMenuTrigger-59QdQP8e.js";import"./ContextMenuSection-v31gfoed.js";import{M as T}from"./ModalTrigger-Bv4goCcX.js";import{M as k}from"./Modal-DYibmbrU.js";import{H}from"./Heading-Bsg56Dmn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./remote-B1GLKgHd.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./utils-CUPQPHYu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-ChnOBFmm.js";import"./usePress-S1YnS57K.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";import"./dynamic-7D0Ds_bm.js";import"./LoadingSpinner-CskkGazD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./AlertIcon-Dv2SXDVH.js";import"./ActionBatch-aysWcgWo.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./Popover-NNrICePK.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./Dialog-BgAnH5cc.js";import"./RSPContexts-CJFisqoy.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./Switch-DflGgK8j.js";import"./useFieldComponent-D7thqSXy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ru_gTzXX.js";import"./useFormReset-w2Qnh74g.js";import"./OverlayTrigger-CV6rtyLj.js";import"./DialogTriggerView-8RuUF7uc.js";import"./Overlay-DezOH_1M.js";import"./ButtonView-DU9V458m.js";import"./Flex-Y2OL3ID-.js";import"./Heading-Bhkk33xY.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
