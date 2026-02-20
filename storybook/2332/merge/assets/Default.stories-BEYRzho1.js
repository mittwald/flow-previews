import{j as r}from"./iframe-BF3zk0it.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BmoaMC54.js";import{L as m}from"./Link-B1BbKw69.js";import{H as s}from"./HeaderNavigation-DYZZo04d.js";import{B as o}from"./Button-ZNdemegp.js";import{T as p}from"./Text-C9_U4GIb.js";import{I as h}from"./Image-Zoclxo10.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Du8K-yac.js";import{C as M,M as c}from"./MenuItem-Y5_Oqunz.js";import{C as I}from"./ContextMenuTrigger-CLnx66A6.js";import"./ContextMenuSection-DmXH8tfJ.js";import{M as T}from"./ModalTrigger-DU9hzIiY.js";import{M as k}from"./Modal-CVbQ3im3.js";import{H}from"./Heading-Dtu6R2J5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./index-S59XLRls.js";import"./remote-CJL-gtYq.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./utils-Ds629Okb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BGqYFkhn.js";import"./usePress-DqnzUH3I.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./dynamic-DMyjxIhV.js";import"./LoadingSpinner-BryS_W8u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./useLabel-CnUcYl5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./AlertIcon-CwrMzrhG.js";import"./ActionBatch-DvnrQlZS.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./Popover-CIOQTdzG.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./Dialog-IYHamviF.js";import"./RSPContexts-ssfE85JL.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./Switch-gHfb8p7j.js";import"./useFieldComponent-Z2yLJYUo.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ZrzPMdJs.js";import"./useFormReset-Dd7cUUSK.js";import"./OverlayTrigger-C5NrL7-k.js";import"./DialogTriggerView-Dq-LzyrT.js";import"./Overlay-CyMqAfYA.js";import"./ButtonView-CID7lXee.js";import"./Flex-Box9uTPb.js";import"./Heading-N6x-j70c.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
