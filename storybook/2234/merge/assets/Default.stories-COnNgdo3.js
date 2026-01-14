import{j as r}from"./iframe-ByN7k_Da.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DZTSBBmw.js";import{L as m}from"./Link-B_PEuL9g.js";import{H as s}from"./HeaderNavigation-CU0CaVj1.js";import{B as o}from"./Button-DLduC619.js";import{T as p}from"./Text-Cb-8LAS5.js";import{I as h}from"./Image-D6R5nRLp.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-cDa1cC-0.js";import{C as M,M as c}from"./ContextMenu-D9Hif_44.js";import{C as I}from"./ContextMenuTrigger-CTAmPMks.js";import"./ContextMenuSection-Cx4PBQo5.js";import{a as T,M as k}from"./Modal-CnYf4Aeh.js";import{H}from"./Heading-CXqr_WQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./remote-DfUdRpIa.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./context-rGL7bC8_.js";import"./utils-D8xEYOuW.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./dynamic-CwJG9Kct.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAFU8pmb.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./useLabel-x0Vjylpp.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Co1wUnJx.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Text-j0nufsIB.js";import"./AlertIcon-5K33k8fm.js";import"./Switch-CJiZENhq.js";import"./useFieldComponent-DAKvP2zf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B8ewhbJx.js";import"./useFormReset-Bc5cKrWY.js";import"./useControlledState-kSDz6lD9.js";import"./VisuallyHidden-CV3OLvgc.js";import"./Dialog-Cvkq5YiV.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./Action-BmGz2Z1M.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./Popover-C4a2YCNk.js";import"./useOverlayController-B-zt5KRt.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./DialogTriggerView-BKgGmwZY.js";import"./Overlay-B6LVcBS5.js";import"./ButtonView-Ioed_FHX.js";import"./Flex-DCh26nOA.js";import"./Heading-Ds7RnOJz.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
