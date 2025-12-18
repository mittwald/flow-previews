import{j as r}from"./iframe-CgWIZppF.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CJrmQcXC.js";import{L as m}from"./Link-HC91FLDg.js";import{H as s}from"./HeaderNavigation-BMy-pGgE.js";import{B as o}from"./Button-B2z86NVg.js";import{T as p}from"./Text-B7pZrZSG.js";import{I as h}from"./Image-DwoXUJtX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-WSdPbpuj.js";import{C as M,M as c}from"./MenuItem-BVcJA2OA.js";import{C as I}from"./ContextMenuTrigger-Dz5Ek0-I.js";import"./ContextMenuSection-BUslXVLP.js";import{a as T,M as k}from"./Modal-CyLUhB_2.js";import{H}from"./Heading-CfRE4X5D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./remote-DVGHPh_8.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./context-DG5uy-SY.js";import"./utils-CqFMFg3g.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./dynamic-BqY2cEs-.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./useLabel-DMBsm_3O.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C8d3FCf4.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./AlertIcon-D3MSf42O.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./Popover-1Hxb36ee.js";import"./useOverlayController-CUfZ3j8o.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./Switch-D2m78o0q.js";import"./useFieldComponent-BZyKlvwh.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CzInoV4z.js";import"./useFormReset-BEtHvHxA.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./DialogTriggerView-3MFEbPUb.js";import"./Overlay-4C_rDxAb.js";import"./ButtonView-DRUBn2V0.js";import"./Flex-2vq5IHKp.js";import"./Heading-DOQpztPl.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
