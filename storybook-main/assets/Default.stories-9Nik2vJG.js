import{j as r}from"./iframe-D6IogGzN.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CDNOZZaQ.js";import{L as m}from"./Link-DMXQMLuA.js";import{H as s}from"./HeaderNavigation-BXr3lgY9.js";import{B as o}from"./Button-4bsuig8G.js";import{T as p}from"./Text-DVEzKGc_.js";import{I as h}from"./Image-BGeMbi2x.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D68T1hIN.js";import{C as M,M as c}from"./MenuItem-yPR6aEP7.js";import{C as I}from"./ContextMenuTrigger-BdFOlCHV.js";import"./ContextMenuSection-DtXi0ARF.js";import{a as T,M as k}from"./Modal-BgGt2oIw.js";import{H}from"./Heading-DudhsRUa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./remote-ByQLcsaA.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./utils-DGVDGTqS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-JSiA5HpL.js";import"./usePress-OPUq1uX5.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./dynamic-DOTSgjbA.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./useLabel--9PNzusi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-JB3DJ3rF.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./AlertIcon-BzliTC0_.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./useStatic-BI3MLON7.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./Popover-Bko44XEP.js";import"./useOverlayController-wzkI43Df.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./Dialog-SQEPLKiU.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";import"./Switch-BnRPZ99w.js";import"./useFieldComponent-DWOteHG6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-AllAErbL.js";import"./useFormReset-zYUel0fa.js";import"./OverlayTrigger-IpTzHf0r.js";import"./DialogTriggerView-BpzCrHEk.js";import"./Overlay-CZxtfVWo.js";import"./ButtonView-DebfDMTY.js";import"./Flex-CNnECfBN.js";import"./Heading-BP-CAVCT.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
