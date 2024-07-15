import{C as r,a,M as c}from"./ContextMenuTrigger-CEnxFcpH.js";import{B as s}from"./Button-CE1BCqF-.js";import{c as v,a as C}from"./IconApp-D9YGKrkS.js";import{T as p}from"./Text-CKjZYOWy.js";import{S as B}from"./Switch-B5gETZiv.js";import{R as e}from"./index-BwDkhjyp.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-L8FZPC_o.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PopoverTrigger-Bmry37I8.js";import"./OverlayTrigger-DAcHIpQJ.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-apusqW7x.js";import"./useSelector-BudK-1xR.js";import"./Action-CGXqiLzQ.js";import"./dynamic-DKDa4OpU.js";import"./IconWarning-B77fLmlz.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./Text-C_suByGF.js";import"./useMenuTrigger-CyXVQiVd.js";import"./SelectionManager-BD-OU06l.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-WO6qy2zn.js";import"./Button-BTMfZQLF.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Label-DmmpejK1.js";import"./Label-DwL17Jrp.js";import"./useToggleState-BohumPZ6.js";import"./useFormReset-CfqvoD0r.js";/**
 * @license @tabler/icons-react v3.9.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=v("outline","bell-ringing","IconBellRinging",[["path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",key:"svg-0"}],["path",{d:"M9 17v1a3 3 0 0 0 6 0v-1",key:"svg-1"}],["path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727",key:"svg-2"}],["path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727",key:"svg-3"}]]);const Ce={title:"Navigation/MenuItem",component:r,render:t=>e.createElement(a,null,e.createElement(s,null,"Trigger"),e.createElement(r,{...t},e.createElement(c,{id:"item1"},"Item 1"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},n={},o={render:t=>e.createElement(a,null,e.createElement(s,null,"Trigger"),e.createElement(r,{...t},e.createElement(c,{id:"subscribe"},e.createElement(C,null,e.createElement(f,null)),e.createElement(p,null,"Subscribe"))))},i={render:t=>e.createElement(a,null,e.createElement(s,null,"Trigger"),e.createElement(r,{...t},e.createElement(c,{id:"subscribe"},e.createElement(p,null,"Subscribe"),e.createElement(B,{isSelected:!0}))))},m={render:t=>e.createElement(a,null,e.createElement(s,null,"Trigger"),e.createElement(r,{...t},e.createElement(c,{id:"subscribe"},e.createElement(C,null,e.createElement(f,null)),e.createElement(p,null,"Subscribe"),e.createElement(B,{isSelected:!0}))))};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,M,E;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Icon>
            <IconBellRinging />
          </Icon>
          <Text>Subscribe</Text>
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(E=(M=o.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var b,x,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Text>Subscribe</Text>
          <Switch isSelected={true} />
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,T,h;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Icon>
            <IconBellRinging />
          </Icon>
          <Text>Subscribe</Text>
          <Switch isSelected={true} />
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(h=(T=m.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const Be=["Default","WithIcon","WithSwitch","WithIconAndSwitch"];export{n as Default,o as WithIcon,m as WithIconAndSwitch,i as WithSwitch,Be as __namedExportsOrder,Ce as default};
