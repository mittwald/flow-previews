import{j as r}from"./iframe-iY_Mn_oy.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-B803z1sh.js";import{L as m}from"./Link-DReQH9zY.js";import{H as s}from"./HeaderNavigation-UD0UHHet.js";import{B as o}from"./Button-BXdn408E.js";import{T as p}from"./Text-C2ZCo6gl.js";import{I as h}from"./Image-CEmJ2Aqa.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-VEmfUtB1.js";import{C as M,M as c}from"./ContextMenu-C1vsaGPq.js";import{C as I}from"./ContextMenuTrigger-Cr6Wbv0a.js";import"./ContextMenuSection-DufqnfrN.js";import{a as T,M as k}from"./Modal-CLuyVeJj.js";import{H}from"./Heading-GKx2aQmx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./remote-CIrN4__o.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./utils-C-pMCGM-.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./dynamic-CDOrKiJc.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./useLabel-8EVB-03H.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DK9hE6UN.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./AlertIcon-Dw605mNU.js";import"./Switch-ubyeQV4j.js";import"./useFieldComponent-Cxjop7r-.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BD2iW2dI.js";import"./useFormReset-DJj-QXR5.js";import"./useControlledState-DUH-ni6I.js";import"./VisuallyHidden-DEFkQEyo.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./Popover-CTmqafGM.js";import"./useOverlayController-B66mlXsj.js";import"./OverlayContextProvider-CEfkP99K.js";import"./OverlayTrigger-D-Sv7Auh.js";import"./DialogTriggerView-CUwwJstk.js";import"./Overlay-B58mF9Ww.js";import"./ButtonView-CZq0YFZA.js";import"./Flex-DVl7y14P.js";import"./Heading-BsXYKZvI.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
