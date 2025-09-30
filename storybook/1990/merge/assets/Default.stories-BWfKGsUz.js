import{j as r}from"./iframe-Dmf5T25c.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-1UlzAmnA.js";import{L as m}from"./Link-DyuGByyd.js";import{H as s}from"./HeaderNavigation-XDa0cTMa.js";import{B as o}from"./Button-DJAJQ6nX.js";import{T as p}from"./Text-DLrkajvz.js";import{I as B}from"./Image-9RcuIZNt.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-1MnZE407.js";import{C as y,M as c}from"./MenuItem-AmM-rCbF.js";import{C as A}from"./ContextMenuTrigger-BgL2rTZR.js";import"./ContextMenuSection-DC2rWjKA.js";import{a as D,M as E}from"./Modal-DOnNcax7.js";import{H as G}from"./Heading-CNHdE3DG.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./index-C0-6kTd0.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./context-CfglF3Ge.js";import"./utils-DsML-bt_.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./dynamic-Do2mwXEo.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DrFxiFmb.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./Text-DgEV6luH.js";import"./AlertIcon-DOQx4HWe.js";import"./Action-7bo_XniG.js";import"./context-DfHcYJaf.js";import"./useStatic-B7bUROdd.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./Popover-BaPL_3pu.js";import"./useOverlayController-BP8yeNHr.js";import"./OverlayContextProvider-ryh_mCsN.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./Switch-FOp3ZZwC.js";import"./useMakeFocusable-qiIWJ0kB.js";import"./useToggleState-BmhNkieC.js";import"./useFormReset-BQs2ByJh.js";import"./OverlayTrigger-CaTON9Cj.js";import"./ControlledNotification-C8UUqqPz.js";import"./DialogTriggerView-D2qtOj2v.js";import"./Overlay-BsC9-YCd.js";import"./ButtonView-CQ5kR79B.js";import"./Heading-C9XhdvxD.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
