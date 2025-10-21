import{j as r}from"./iframe-CMcq8v1f.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-pzLTBmMV.js";import{L as m}from"./Link-BTcql2fF.js";import{H as s}from"./HeaderNavigation-BeDtIdZI.js";import{B as o}from"./Button-CRhbM7FI.js";import{T as p}from"./Text-DOkc_YZA.js";import{I as h}from"./Image-DyPgCXsb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DMp9UzEn.js";import{C as M,M as c}from"./MenuItem-BjpBf2Z8.js";import{C as I}from"./ContextMenuTrigger-CUHrEZI3.js";import"./ContextMenuSection-DtqQsaJ2.js";import{a as T,M as k}from"./Modal-Cn4Odf1L.js";import{H}from"./Heading-B3YRxumr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./utils-B4_KO4f3.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./dynamic-FUMijUiW.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./useLabel-MLAtSIJy.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BnbqEoZX.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./AlertIcon-CmJKkQcL.js";import"./Action-DzVfKIry.js";import"./context-haW4s5UJ.js";import"./useStatic-CKvWQ5ch.js";import"./getActionGroupSlot-CSYISPXH.js";import"./Popover-B0yZiuHu.js";import"./useOverlayController-B6qJG6eL.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./Dialog-Drh022ms.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./ClearPropsContext-CU9ecYMv.js";import"./Switch-qlG-ZURY.js";import"./useFieldComponent-B7IsP0qp.js";import"./react-children-utilities-CDk9z-7u.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-B2ENdPIj.js";import"./useToggleState-BXf1_Gpc.js";import"./useFormReset-DUTu2q8R.js";import"./OverlayTrigger-CxCtI9-h.js";import"./ControlledNotification-B4XPi9m7.js";import"./DialogTriggerView-lwv7ss23.js";import"./Overlay-BdAi3wg_.js";import"./ButtonView-DRYamufn.js";import"./Heading-CmiL6R02.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
