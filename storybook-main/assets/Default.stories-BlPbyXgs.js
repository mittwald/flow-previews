import{j as r}from"./iframe-BwTc9KkQ.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CuEgZ9GS.js";import{L as m}from"./Link-Dfs0oXSd.js";import{H as s}from"./HeaderNavigation-9XyTKh_B.js";import{B as o}from"./Button-Ckvz-MCb.js";import{T as p}from"./Text-Gc4XBNKO.js";import{I as h}from"./Image-CDuBZKih.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D0Q-f-7d.js";import{C as M,M as c}from"./MenuItem-Cmfl0u0q.js";import{C as I}from"./ContextMenuTrigger-dW6z12Kq.js";import"./ContextMenuSection-LW48IjXN.js";import{a as T,M as k}from"./Modal-GHoGiqJy.js";import{H}from"./Heading-DdwcYqWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./remote-B0txjFXx.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./utils-CBQcEIVx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BpPHYutm.js";import"./usePress-CJeMKVhz.js";import"./useFocusRing-DolIE8eq.js";import"./useFocusable-B00zaX18.js";import"./dynamic-BE4DvzFx.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./useLabel-BSSuBv8C.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-vKZ8hCbx.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./AlertIcon-B9dP4NVD.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./useStatic-D7wzuZGA.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./Popover-BUM7xHoq.js";import"./useOverlayController-DcbIZot8.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./Dialog-DfJHDuJ2.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";import"./Switch-CnQUUnNr.js";import"./useFieldComponent-D1bp3yFp.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cml1ZYmi.js";import"./useFormReset-38634gnl.js";import"./OverlayTrigger-D7e37rU3.js";import"./DialogTriggerView-CRwE8vdK.js";import"./Overlay-P-T-AjGA.js";import"./ButtonView-BIDw_mr1.js";import"./Flex-Bq7kTsKW.js";import"./Heading-DshP_5_D.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
