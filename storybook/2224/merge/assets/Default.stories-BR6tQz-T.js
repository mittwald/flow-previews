import{j as r}from"./iframe-D3NxpU8u.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CbcK8G8M.js";import{L as m}from"./Link-cJTSf6Vg.js";import{H as s}from"./HeaderNavigation-V_o2zzqi.js";import{B as o}from"./Button-edx4tjlA.js";import{T as p}from"./Text-D1hVvtRE.js";import{I as h}from"./Image-u72nW70a.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CAdA-CK4.js";import{C as M,M as c}from"./MenuItem-D6FKnMeg.js";import{C as I}from"./ContextMenuTrigger-DBSsuwgi.js";import"./ContextMenuSection-BZ_yBJ42.js";import{a as T,M as k}from"./Modal-VqbZkA1u.js";import{H}from"./Heading-BTvslLGP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./index-A0HM7_1k.js";import"./remote-Cz3kT78_.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./context-CgVi_M53.js";import"./utils-C5WN15Gt.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./dynamic-Cp5s9Mjb.js";import"./LoadingSpinner-D_HEbJEf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BOXTMksI.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./useLabel-DrWOXoHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-_fqBbauj.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./Text-ChwArYoy.js";import"./AlertIcon-Ca7Aqq8g.js";import"./Action-CgjRBsSL.js";import"./context-BviD8e-k.js";import"./useStatic-Cxgn0lDK.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./Popover-QtpEgILn.js";import"./useOverlayController-lbjW1yTF.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./Switch-CtgFPFHy.js";import"./useFieldComponent-BWjf97vE.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CNTmI9U3.js";import"./useFormReset-LpCZRAmu.js";import"./OverlayTrigger-BzsNNahf.js";import"./DialogTriggerView-DGdEuC_1.js";import"./Overlay-BsxDEKI2.js";import"./ButtonView-D-stYF68.js";import"./Flex-D_biwL3f.js";import"./Heading-apCDmXp5.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
