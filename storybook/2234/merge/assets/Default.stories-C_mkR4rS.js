import{j as r}from"./iframe-DZ4teeW0.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BMXzPSbA.js";import{L as m}from"./Link-BGXzo5UM.js";import{H as s}from"./HeaderNavigation-DXOxOYKI.js";import{B as o}from"./Button-DKoFnNBZ.js";import{T as p}from"./Text-C4YBtGrU.js";import{I as h}from"./Image-CfehdNX_.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bonfp6V7.js";import{C as M,M as c}from"./ContextMenu-BlWs3f9C.js";import{C as I}from"./ContextMenuTrigger-DaYyEAiy.js";import"./ContextMenuSection-NaF-svH4.js";import{a as T,M as k}from"./Modal-CwmalsWe.js";import{H}from"./Heading-DmKF-kzC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./remote-C7mA51oY.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./utils-CmR_RyV0.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./dynamic-DLpaDBxN.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./useLabel-CN_YQU3T.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BOIGtlkn.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./AlertIcon-Dng1V2P2.js";import"./Switch-DWY9n4FY.js";import"./useFieldComponent-D07Wu5hH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cwscwg90.js";import"./useFormReset-CHb94_Ie.js";import"./useControlledState-CE05dG3o.js";import"./VisuallyHidden-DG5gzPUr.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./Popover-O3EK8S3M.js";import"./useOverlayController-CclcYwrc.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./OverlayTrigger-DrQSWpcn.js";import"./DialogTriggerView-CLznd6gg.js";import"./Overlay-B6eRrWUp.js";import"./ButtonView-GY_qalku.js";import"./Flex-Di5humJ9.js";import"./Heading-OLDiOTzf.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
