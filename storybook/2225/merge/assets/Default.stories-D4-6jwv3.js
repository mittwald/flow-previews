import{j as r}from"./iframe-DyIQYB7R.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-BlqJF_wS.js";import{L as m}from"./Link-BHjryOZC.js";import{H as s}from"./HeaderNavigation-ChleOsEj.js";import{B as o}from"./Button-C3sAJBlh.js";import{T as p}from"./Text-DP5VQe4y.js";import{I as h}from"./Image-CXIxZr83.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BHP8nOFb.js";import{C as M,M as c}from"./MenuItem-BXLlI-P_.js";import{C as I}from"./ContextMenuTrigger-B9ehtSgd.js";import"./ContextMenuSection-CGwj4hwH.js";import{a as T,M as k}from"./Modal-BVbUu369.js";import{H}from"./Heading-C6tbK1yl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./remote-CduUCN7o.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./utils-Br5k-T_U.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./dynamic-tPr8Th1P.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./useLabel-Cx64g9XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./AlertIcon--LZTg8-U.js";import"./Action-2iALePMB.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./getActionGroupSlot-D_7amHYE.js";import"./Popover-BS-N1A-i.js";import"./useOverlayController-BUDO6s9b.js";import"./OverlayContextProvider-D2R86dNb.js";import"./Dialog-Bezv0IMM.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./useControlledState-C9rhpCZz.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";import"./Switch-9r0YEfHa.js";import"./useFieldComponent-BuMHMJdd.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-WLhzfmFf.js";import"./useFormReset-DbNMnmkG.js";import"./OverlayTrigger-Dkelca7C.js";import"./DialogTriggerView-DaaYLo3X.js";import"./Overlay-BLAmI-Lj.js";import"./ButtonView-LTtgsx-z.js";import"./Flex-Dju8rRaZ.js";import"./Heading-BomgGhUe.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
