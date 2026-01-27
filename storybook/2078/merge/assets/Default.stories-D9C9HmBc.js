import{j as r}from"./iframe-EUG4rdOg.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CN_aXaJM.js";import{L as m}from"./Link-DH1Vm4ZB.js";import{H as s}from"./HeaderNavigation-CwHgKvjW.js";import{B as o}from"./Button-CEake6G1.js";import{T as p}from"./Text-DlICJI4S.js";import{I as h}from"./Image-EkLrMt4k.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dy4tfaM3.js";import{C as M,M as c}from"./ContextMenu-Bz7puVMH.js";import{C as I}from"./ContextMenuTrigger-_OSnRPnl.js";import"./ContextMenuSection-BWaZOiqV.js";import{a as T,M as k}from"./Modal-B8BX44PT.js";import{H}from"./Heading-Bi7E6SrE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./remote-Bl5KctCq.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./utils-DJPQq0Ir.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Ca80QzG_.js";import"./usePress-CyxS_pZ-.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./dynamic-B-NoN6qZ.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./useLabel-Ddt3ftMp.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Dr5hWFfi.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";import"./AlertIcon-C4O6kAyM.js";import"./Switch-DvUeFtN7.js";import"./useFieldComponent-Bs969hQl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bt36YEmE.js";import"./useFormReset-BWBNxDQ8.js";import"./useControlledState-DorIVmrH.js";import"./VisuallyHidden-DwLUyGt6.js";import"./Dialog-ClYDKCvQ.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./getActionGroupSlot-nY47Clec.js";import"./Popover-CaMCpQGe.js";import"./useOverlayController-8UNjRd9m.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./OverlayTrigger-CAZY-Adw.js";import"./DialogTriggerView--p8kbOfS.js";import"./Overlay-Cq6GQtlC.js";import"./ButtonView-BC_ryqYl.js";import"./Flex-DMYuZ1Af.js";import"./Heading-DsDU_kOR.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
